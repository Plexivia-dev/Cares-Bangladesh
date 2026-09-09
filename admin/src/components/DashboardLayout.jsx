import { Outlet, Link, useNavigate } from "react-router-dom";
import { LayoutDashboard, Image as ImageIcon, FileText, Users, Settings, LogOut } from "lucide-react";

export default function DashboardLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white border-r flex flex-col">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold text-gray-800">Cares Admin</h1>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link to="/slider" className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 p-2 rounded">
            <ImageIcon size={20} />
            <span>Home Slider</span>
          </Link>
          <Link to="/blog" className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 p-2 rounded">
            <FileText size={20} />
            <span>Blog</span>
          </Link>
          <Link to="/team" className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 p-2 rounded">
            <Users size={20} />
            <span>Our Team</span>
          </Link>
          <Link to="/settings" className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 p-2 rounded">
            <Settings size={20} />
            <span>Settings</span>
          </Link>
        </nav>
        <div className="p-4 border-t">
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 text-red-600 hover:bg-red-50 p-2 rounded w-full"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
