import { useState, useEffect } from "react";
import axios from "axios";
import { Trash2, Edit } from "lucide-react";

export default function HomeSliderPage() {
  const [sliders, setSliders] = useState([]);
  const [formData, setFormData] = useState({ title: "", subtitle: "", imageUrl: "", buttonText: "", buttonLink: "", order: 0, isActive: true });
  const [editingId, setEditingId] = useState(null);

  const token = localStorage.getItem("admin_token");
  const headers = { Authorization: `Bearer ${token}` };

  const fetchSliders = async () => {
    try {
      const res = await axios.get("http://localhost:5092/api/v1/home-slider", { headers });
      setSliders(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchSliders();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`http://localhost:5092/api/v1/home-slider/${editingId}`, formData, { headers });
      } else {
        await axios.post("http://localhost:5092/api/v1/home-slider", formData, { headers });
      }
      setFormData({ title: "", subtitle: "", imageUrl: "", buttonText: "", buttonLink: "", order: 0, isActive: true });
      setEditingId(null);
      fetchSliders();
    } catch (err) {
      alert("Error saving slider");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Manage Home Slider</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 bg-white p-4 rounded shadow h-fit">
          <h3 className="font-bold mb-4">{editingId ? "Edit Slider" : "Add Slider"}</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input required type="text" placeholder="Title" className="w-full border p-2 rounded" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} />
            <input type="text" placeholder="Subtitle" className="w-full border p-2 rounded" value={formData.subtitle} onChange={(e) => setFormData({...formData, subtitle: e.target.value})} />
            <input required type="text" placeholder="Image URL" className="w-full border p-2 rounded" value={formData.imageUrl} onChange={(e) => setFormData({...formData, imageUrl: e.target.value})} />
            <input type="text" placeholder="Button Text" className="w-full border p-2 rounded" value={formData.buttonText} onChange={(e) => setFormData({...formData, buttonText: e.target.value})} />
            <input type="text" placeholder="Button Link" className="w-full border p-2 rounded" value={formData.buttonLink} onChange={(e) => setFormData({...formData, buttonLink: e.target.value})} />
            <div className="flex gap-2">
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded flex-1">Save</button>
              {editingId && (
                <button type="button" onClick={() => { setEditingId(null); setFormData({title: "", subtitle: "", imageUrl: "", buttonText: "", buttonLink: "", order: 0, isActive: true}) }} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
              )}
            </div>
          </form>
        </div>
        <div className="md:col-span-2 space-y-4">
          {sliders.map(slider => (
            <div key={slider.id} className="bg-white p-4 rounded shadow flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img src={slider.imageUrl || 'https://via.placeholder.com/150'} alt={slider.title} className="w-24 h-16 object-cover rounded" />
                <div>
                  <h4 className="font-bold">{slider.title}</h4>
                  <p className="text-sm text-gray-600">{slider.subtitle}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button onClick={() => {setFormData(slider); setEditingId(slider.id);}} className="text-blue-600 p-1"><Edit size={18} /></button>
                <button onClick={async () => { if(confirm("Are you sure?")) { await axios.delete(`http://localhost:5092/api/v1/home-slider/${slider.id}`, {headers}); fetchSliders(); } }} className="text-red-600 p-1"><Trash2 size={18} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
