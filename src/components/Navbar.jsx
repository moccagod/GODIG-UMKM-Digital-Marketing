import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Beranda", path: "/" },
    { name: "Layanan", path: "/layanan" },
    { name: "Artikel", path: "/artikel" },
    { name: "Kontak", path: "/kontak" },
  ];

  const linkClass = (path) =>
    `block px-4 py-2 rounded-md font-medium transition ${
      location.pathname === path
        ? "text-green-600"
        : "text-black hover:text-green-500"
    }`;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-green-600"
        >
          <img
            src="/images/logo.png"
            alt="GODIG Logo"
            className="w-8 h-8 object-contain"
          />
          GODIG
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={linkClass(link.path)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/admin"
            className="text-sm bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            Admin
          </Link>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-white border-t"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-4 py-2 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={linkClass(link.path)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/admin"
                onClick={() => setMenuOpen(false)}
                className="block text-sm bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
              >
                Admin
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
