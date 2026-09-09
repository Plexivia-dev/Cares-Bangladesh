import { useState, useEffect } from "react";
import axios from "axios";
import { Trash2, Edit } from "lucide-react";

export default function TeamPage() {
  const [team, setTeam] = useState([]);
  const [formData, setFormData] = useState({ name: "", role: "", category: "", bio: "", image: "", isLeadership: false });
  const [editingId, setEditingId] = useState(null);

  const token = localStorage.getItem("admin_token");
  const headers = { Authorization: `Bearer ${token}` };

  const fetchTeam = async () => {
    try {
      const res = await axios.get("http://localhost:5092/api/v1/team", { headers });
      setTeam(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTeam();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`http://localhost:5092/api/v1/team/${editingId}`, formData, { headers });
      } else {
        await axios.post("http://localhost:5092/api/v1/team", formData, { headers });
      }
      setFormData({ name: "", role: "", category: "", bio: "", image: "", isLeadership: false });
      setEditingId(null);
      fetchTeam();
    } catch (err) {
      alert("Error saving member");
    }
  };

  const handleEdit = (member) => {
    setFormData(member);
    setEditingId(member.id);
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure?")) {
      try {
        await axios.delete(`http://localhost:5092/api/v1/team/${id}`, { headers });
        fetchTeam();
      } catch (err) {
        alert("Error deleting member");
      }
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Manage Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 bg-white p-4 rounded shadow h-fit">
          <h3 className="font-bold mb-4">{editingId ? "Edit Member" : "Add Member"}</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input required type="text" placeholder="Name" className="w-full border p-2 rounded" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
            <input required type="text" placeholder="Role" className="w-full border p-2 rounded" value={formData.role} onChange={(e) => setFormData({...formData, role: e.target.value})} />
            <input type="text" placeholder="Category" className="w-full border p-2 rounded" value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})} />
            <textarea placeholder="Bio" className="w-full border p-2 rounded" value={formData.bio} onChange={(e) => setFormData({...formData, bio: e.target.value})} />
            <input type="text" placeholder="Image URL" className="w-full border p-2 rounded" value={formData.image} onChange={(e) => setFormData({...formData, image: e.target.value})} />
            <label className="flex items-center space-x-2">
              <input type="checkbox" checked={formData.isLeadership} onChange={(e) => setFormData({...formData, isLeadership: e.target.checked})} />
              <span>Is Leadership?</span>
            </label>
            <div className="flex gap-2">
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded flex-1">Save</button>
              {editingId && (
                <button type="button" onClick={() => { setEditingId(null); setFormData({name: "", role: "", category: "", bio: "", image: "", isLeadership: false}) }} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
              )}
            </div>
          </form>
        </div>
        <div className="md:col-span-2 space-y-4">
          {team.map(member => (
            <div key={member.id} className="bg-white p-4 rounded shadow flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img src={member.image || 'https://via.placeholder.com/50'} alt={member.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold">{member.name} {member.isLeadership && <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded">Leadership</span>}</h4>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button onClick={() => handleEdit(member)} className="text-blue-600 p-1"><Edit size={18} /></button>
                <button onClick={() => handleDelete(member.id)} className="text-red-600 p-1"><Trash2 size={18} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
