import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";


// Import pages
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Blog from "../pages/Blog";
import BlogDetail from "../pages/BlogDetail";
import Contact from "../pages/Contact";

// Admin pages
import AdminLogin from "../pages/admin/AdminLogin";
import Dashboard from "../pages/admin/Dashboard";
import ManageArticles from "../pages/admin/ManageArticles";

import ManageServices from "../pages/admin/ManageServices";
import ManageContacts from "../pages/admin/ManageContacts";
import AddArticles from "../pages/admin/AddArticles";
import DetailArticles from "../pages/admin/DetailArticles";
import Thanks from "../pages/Thanks";

const AppRouter = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/tentang" element={<About />} />
        <Route path="/layanan" element={<Services />} />
        <Route path="/artikel" element={<Blog />} />
        <Route path="/artikel/:id" element={<BlogDetail />} />
        <Route path="/kontak" element={<Contact />} />
        <Route path="/thanks" element={<Thanks />} />

        

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/artikel" element={<ManageArticles />} />
        <Route path="/admin/artikel/tambah" element={<AddArticles />} />
        <Route path="/admin/artikel/:id" element={<DetailArticles />} />
        <Route path="/admin/layanan" element={<ManageServices />} />
        <Route path="/admin/kontak" element={<ManageContacts />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRouter;
