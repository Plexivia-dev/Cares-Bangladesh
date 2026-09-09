import { useState, useEffect } from "react";
import axios from "axios";

export default function SettingsPage() {
  const [logoUrl, setLogoUrl] = useState("");
  const [faviconUrl, setFaviconUrl] = useState("");
  const [message, setMessage] = useState("");

  const token = localStorage.getItem("admin_token");
  const headers = { Authorization: `Bearer ${token}` };

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await axios.get("http://localhost:5092/api/v1/settings/branding", { headers });
        if (res.data.status === "success") {
          setLogoUrl(res.data.data.logoUrl);
          setFaviconUrl(res.data.data.faviconUrl);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchSettings();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await axios.put(
        "http://localhost:5092/api/v1/settings/branding",
        { logoUrl, faviconUrl },
        { headers }
      );
      if (res.data.status === "success") {
        setMessage("Settings updated successfully!");
      }
    } catch (err) {
      setMessage("Failed to update settings.");
    }
  };

  return (
    <div className="max-w-2xl bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Branding Settings</h2>
      {message && <div className="mb-4 p-3 bg-blue-50 text-blue-700 rounded">{message}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Logo URL</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            value={logoUrl}
            onChange={(e) => setLogoUrl(e.target.value)}
            placeholder="https://example.com/logo.png"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Favicon URL</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            value={faviconUrl}
            onChange={(e) => setFaviconUrl(e.target.value)}
            placeholder="https://example.com/favicon.png"
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Save Settings
        </button>
      </form>
    </div>
  );
}
