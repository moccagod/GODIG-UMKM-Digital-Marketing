import { Megaphone, FileText, LayoutGrid, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const layananList = [
  {
    title: "Manajemen Media Sosial",
    icon: <Megaphone size={28} />,
    desc: "Optimalkan akun Instagram, Facebook, dan TikTok bisnismu dengan konten profesional dan konsisten.",
  },
  {
    title: "Pembuatan Konten Digital",
    icon: <FileText size={28} />,
    desc: "Kami bantu membuat desain feed, reels, dan caption yang menarik untuk brand kamu.",
  },
  {
    title: "Iklan Digital",
    icon: <LayoutGrid size={28} />,
    desc: "Tingkatkan penjualan dengan iklan di Meta Ads dan Google Ads secara efektif dan terukur.",
  },
  {
    title: "Konsultasi & Branding",
    icon: <MessageSquare size={28} />,
    desc: "Bingung mulai dari mana? Tim kami siap bantu arahkan strategi digital marketing UMKM kamu.",
  },
];

const paketList = [
  {
    name: "Starter",
    price: "Rp500.000",
    features: [
      "Desain 5 Konten Feed",
      "1x Konsultasi",
      "Optimasi Bio Instagram",
    ],
  },
  {
    name: "Pro",
    price: "Rp1.000.000",
    features: [
      "Desain 10 Konten Feed + Caption",
      "2x Konsultasi",
      "Iklan Instagram 3 Hari",
    ],
  },
  {
    name: "Premium",
    price: "Rp2.000.000",
    features: [
      "Semua di Paket Pro",
      "Manajemen Sosial Media",
      "Laporan Bulanan",
    ],
  },
];

const benefitList = [
  {
    title: "Tim Ahli & Berpengalaman",
    desc: "Kami sudah membantu puluhan UMKM mengembangkan bisnis online-nya.",
  },
  {
    title: "Harga Terjangkau",
    desc: "Layanan kami dirancang untuk UMKM yang baru berkembang.",
  },
  {
    title: "Dukungan Personal",
    desc: "Kami akan bantu kamu step-by-step hingga bisnismu siap online.",
  },
  {
    title: "Tanpa Kontrak Panjang",
    desc: "Bisa digunakan kapan pun tanpa perlu komitmen jangka panjang.",
  },
];

const testimonials = [
  {
    name: "Ayu Wulandari",
    brand: "KueRumahan.id",
    quote:
      "Kontennya sangat membantu meningkatkan engagement! Desainnya profesional dan sesuai branding kami.",
    image: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "Rizal Hidayat",
    brand: "Kopi Keliling",
    quote:
      "Timnya responsif dan strategi iklannya terbukti menaikkan penjualan dalam 1 minggu.",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Sinta Dewi",
    brand: "SintaCraft",
    quote:
      "Sangat puas! Reels yang dibuat selalu trending dan timnya ngerti banget kebutuhan UMKM.",
    image: "https://i.pravatar.cc/150?img=32",
  },
];

const Services = () => {
  return (
    <PageWrapper>
      <Navbar />
      <div className="min-h-screen bg-white py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-green-600">
              Layanan Kami
            </h1>
            <p className="mt-4 text-gray-700 text-md md:text-lg">
              Solusi digital marketing lengkap untuk bantu UMKM berkembang di
              dunia online.
            </p>
          </motion.div>

          {/* Grid Layanan */}
          <div className="grid md:grid-cols-2 gap-8">
            {layananList.map((layanan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-green-50 border border-green-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition"
              >
                <div className="flex items-center gap-3 mb-4 text-green-600">
                  {layanan.icon}
                  <h3 className="text-xl font-semibold">{layanan.title}</h3>
                </div>
                <p className="text-gray-700 text-sm">{layanan.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Paket Jasa */}
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-center text-green-600 mb-10">
              Pilih Paket yang Sesuai
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {paketList.map((paket, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white border border-green-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition"
                >
                  <h3 className="text-xl font-bold text-green-600 mb-2">
                    {paket.name}
                  </h3>
                  <p className="text-black font-semibold mb-4">{paket.price}</p>
                  <ul className="text-sm text-gray-700 space-y-2 mb-4">
                    {paket.features.map((feat, i) => (
                      <li key={i}>✔ {feat}</li>
                    ))}
                  </ul>
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm font-medium transition"
                  >
                    Hubungi Kami
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Benefit Section */}
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-center text-green-600 mb-10">
              Kenapa Memilih GODIG?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefitList.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="bg-green-50 border border-green-200 p-6 rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <h4 className="text-lg font-semibold text-green-700 mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-gray-700">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Section Testimoni */}
          <div className="mt-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-green-600">
                Apa Kata Klien Kami
              </h2>
              <p className="mt-2 text-gray-700">
                Beberapa UMKM yang sudah merasakan manfaat layanan kami.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.2 }}
                  className="bg-white border border-green-200 rounded-xl p-6 shadow hover:shadow-md transition"
                >
                  <p className="text-sm text-gray-600 italic mb-4">
                    “{item.quote}”
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-10 rounded-full object-cover border"
                    />
                    <div>
                      <div className="text-sm font-semibold text-green-700">
                        {item.name}
                      </div>
                      <div className="text-xs text-gray-500">{item.brand}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </PageWrapper>
  );
};

export default Services;
