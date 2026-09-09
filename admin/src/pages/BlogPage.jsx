import { useState, useEffect } from "react";
import axios from "axios";
import { Trash2, Edit } from "lucide-react";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({ title: "", slug: "", content: "", excerpt: "", coverImage: "", author: "Admin", isActive: true });
  const [editingId, setEditingId] = useState(null);

  const token = localStorage.getItem("admin_token");
  const headers = { Authorization: `Bearer ${token}` };

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:5092/api/v1/blogs", { headers });
      setBlogs(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`http://localhost:5092/api/v1/blogs/${editingId}`, formData, { headers });
      } else {
        await axios.post("http://localhost:5092/api/v1/blogs", formData, { headers });
      }
      setFormData({ title: "", slug: "", content: "", excerpt: "", coverImage: "", author: "Admin", isActive: true });
      setEditingId(null);
      fetchBlogs();
    } catch (err) {
      alert("Error saving blog");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Manage Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 bg-white p-4 rounded shadow h-fit">
          <h3 className="font-bold mb-4">{editingId ? "Edit Blog" : "Add Blog"}</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input required type="text" placeholder="Title" className="w-full border p-2 rounded" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value, slug: e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-')})} />
            <input required type="text" placeholder="Slug" className="w-full border p-2 rounded" value={formData.slug} onChange={(e) => setFormData({...formData, slug: e.target.value})} />
            <textarea placeholder="Excerpt" className="w-full border p-2 rounded" value={formData.excerpt} onChange={(e) => setFormData({...formData, excerpt: e.target.value})} />
            <textarea required placeholder="Content" className="w-full border p-2 rounded h-32" value={formData.content} onChange={(e) => setFormData({...formData, content: e.target.value})} />
            <input type="text" placeholder="Cover Image URL" className="w-full border p-2 rounded" value={formData.coverImage} onChange={(e) => setFormData({...formData, coverImage: e.target.value})} />
            <div className="flex gap-2">
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded flex-1">Save</button>
              {editingId && (
                <button type="button" onClick={() => { setEditingId(null); setFormData({title: "", slug: "", content: "", excerpt: "", coverImage: "", author: "Admin", isActive: true}) }} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
              )}
            </div>
          </form>
        </div>
        <div className="md:col-span-2 space-y-4">
          {blogs.map(blog => (
            <div key={blog.id} className="bg-white p-4 rounded shadow flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                {blog.coverImage && <img src={blog.coverImage} alt={blog.title} className="w-16 h-16 object-cover rounded" />}
                <div>
                  <h4 className="font-bold">{blog.title}</h4>
                  <p className="text-sm text-gray-600">/{blog.slug}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button onClick={() => {setFormData(blog); setEditingId(blog.id);}} className="text-blue-600 p-1"><Edit size={18} /></button>
                <button onClick={async () => { if(confirm("Are you sure?")) { await axios.delete(`http://localhost:5092/api/v1/blogs/${blog.id}`, {headers}); fetchBlogs(); } }} className="text-red-600 p-1"><Trash2 size={18} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
