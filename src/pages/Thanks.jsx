import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Thanks = () => {
  return (
    <PageWrapper>
      <Navbar />
      <div className="bg-white flex items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-green-50 border border-green-200 rounded-2xl p-8 max-w-lg w-full text-center shadow-md"
        >
          <CheckCircle size={48} className="mx-auto text-green-500 mb-4" />
          <h1 className="text-2xl font-bold text-green-700 mb-2">
            Terima Kasih!
          </h1>
          <p className="text-gray-700">
            Pesan kamu telah berhasil dikirim. Tim kami akan segera menghubungi
            kamu.
          </p>

          <Link
            to="/"
            className="inline-block mt-6 bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-2 rounded-lg transition"
          >
            Kembali ke Beranda
          </Link>
        </motion.div>
      </div>
      <Footer />
    </PageWrapper>
  );
};

export default Thanks;
