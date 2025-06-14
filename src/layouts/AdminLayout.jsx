import { Link, useLocation, useNavigate } from "react-router-dom";
import { supabase } from "../supabase/client";

const AdminLayout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "Dashboard", path: "/admin/dashboard" },
    { name: "Articles", path: "/admin/artikel" },
    { name: "Services", path: "/admin/layanan" },
    { name: "Contacts", path: "/admin/kontak" },
  ];

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin");
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-green-300 text-black px-4 py-6 flex flex-col justify-between fixed h-screen">
        <div>
          <h2 className="text-xl font-bold mb-6">GODIG Admin</h2>
          <nav className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 rounded-md font-medium ${
                  location.pathname === item.path
                    ? "bg-white text-green-600"
                    : "hover:bg-green-200"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <button
          onClick={handleLogout}
          className="mt-6 w-full text-left bg-red-100 text-red-600 hover:bg-red-200 px-3 py-2 rounded-md font-medium"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1 overflow-y-auto bg-white p-6">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
