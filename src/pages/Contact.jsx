import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <PageWrapper>
      <Navbar />
      <div className="min-h-screen bg-white py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Judul */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-green-600">
              Hubungi Kami
            </h1>
            <p className="mt-4 text-gray-700">
              Silakan kirim pesan atau pertanyaan kamu lewat formulir di bawah
              ini.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form Pakai Formsubmit */}
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              action="https://formsubmit.co/azminailalhadi28@gmail.com"
              method="POST"
              className="space-y-4"
            >
              {/* Hapus bot spam */}
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="http://localhost:5173/thanks"
              />

              <div>
                <label className="block text-sm font-medium text-black">
                  Nama
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black">
                  Pesan
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition"
              >
                Kirim Pesan
              </button>
            </motion.form>

            {/* Info Kontak */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <Mail className="text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-black">Email</h4>
                  <p className="text-sm text-gray-700">kontak@godig.co.id</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-black">WhatsApp</h4>
                  <p className="text-sm text-gray-700">+62 812-3456-7890</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-black">Alamat</h4>
                  <p className="text-sm text-gray-700">
                    Jl. Digital Kreatif No. 123, Bandung, Indonesia
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </PageWrapper>
  );
};

export default Contact;
