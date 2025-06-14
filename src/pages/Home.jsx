import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageWrapper from "../components/PageWrapper";
import {
  Megaphone,
  FileText,
  LayoutGrid,
  MessageSquare,
  ShieldCheck,
  TrendingUp,
  DollarSign,
  Users,
  Quote,
} from "lucide-react";

const layananList = [
  {
    title: "Manajemen Media Sosial",
    icon: <Megaphone size={28} />,
    desc: "Optimalkan akun media sosial bisnis kamu dengan konten profesional.",
  },
  {
    title: "Pembuatan Konten Digital",
    icon: <FileText size={28} />,
    desc: "Desain feed, reels, dan caption menarik yang meningkatkan branding kamu.",
  },
  {
    title: "Iklan Digital",
    icon: <LayoutGrid size={28} />,
    desc: "Jangkau lebih banyak pelanggan dengan Meta Ads & Google Ads.",
  },
  {
    title: "Konsultasi & Branding",
    icon: <MessageSquare size={28} />,
    desc: "Dapatkan strategi digital marketing yang tepat untuk bisnis UMKM.",
  },
];

const benefitList = [
  { icon: <ShieldCheck />, title: "Tim Berpengalaman" },
  { icon: <DollarSign />, title: "Harga Terjangkau" },
  { icon: <TrendingUp />, title: "Hasil Terukur" },
  { icon: <Users />, title: "Pendampingan UMKM" },
];

const testimonies = [
  {
    name: "Sari - Pemilik Toko Kue",
    text: "Omzet naik 2x lipat setelah dibantu GODIG untuk konten Instagram & iklan!",
  },
  {
    name: "Riko - Fashion UMKM",
    text: "Timnya fast respon, dan hasil desain feed-nya keren banget!",
  },
  {
    name: "Lina - Warung Harian",
    text: "GODIG bantu banget untuk promosi di Facebook, sekarang makin banyak pelanggan.",
  },
  {
    name: "Budi - Jasa Servis AC",
    text: "Semenjak dibantu buat Google Ads, banyak klien baru yang masuk!",
  },
  {
    name: "Tari - Craft Handmade",
    text: "Desain konten dari tim GODIG sangat cocok dengan produk saya, hasilnya estetik!",
  },
  {
    name: "Andi - Makanan Beku",
    text: "Konten reels buatan mereka viral, orderan saya langsung meledak!",
  },
  {
    name: "Fitri - Skincare Lokal",
    text: "Branding dan strategi dari GODIG bikin produk saya lebih dipercaya pelanggan.",
  },
  {
    name: "Hendra - Kopi Susu UMKM",
    text: "Awalnya bingung soal digital marketing, tapi GODIG bantu sampai jelas dan jalan!",
  },
];

const Home = () => {
  return (
    <PageWrapper>
      <Navbar />

      {/* Hero Section */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Gambar / Ilustrasi (Mobile: atas, Desktop: kanan) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <img
              src="/images/hero.png"
              alt="Digital Marketing Illustration"
              className="w-full max-w-md mx-auto md:mx-0"
            />
          </motion.div>

          {/* Konten Teks (Mobile: bawah, Desktop: kiri) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-green-700 leading-tight">
              Digital Marketing untuk UMKM yang Siap Naik Kelas
            </h1>
            <p className="mt-4 text-gray-700 text-lg">
              GODIG bantu bisnis lokal kamu tumbuh di dunia digital lewat konten
              kreatif & strategi online yang tepat.
            </p>
            <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/layanan"
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition text-center"
              >
                Lihat Layanan
              </Link>
              <Link
                to="/kontak"
                className="border border-green-600 text-green-700 px-6 py-3 rounded-lg hover:bg-green-50 transition text-center"
              >
                Hubungi Kami
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tentang Kami */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Kiri: Gambar dengan animasi dari kiri */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <img
              src="/images/logo.png" // Ganti sesuai nama file kamu
              alt="Tentang Kami"
              className="w-1/2 md:w-full h-auto justify-center mx-auto"
            />
          </motion.div>

          {/* Kanan: Teks dengan animasi dari kanan */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h2 className="text-center md:text-start text-4xl font-bold text-green-700 mb-4">
              Siapa Kami?
            </h2>
            <p className="text-center md:text-start text-gray-700 text-md md:text-lg">
              GODIG (Go Digital) adalah tim digital marketing yang berfokus
              membantu UMKM berkembang melalui media sosial, konten kreatif, dan
              iklan online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Layanan Unggulan */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-700 text-center mb-10">
            Layanan Kami
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {layananList.map((layanan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white border border-green-100 rounded-2xl p-6 shadow hover:shadow-md"
              >
                <div className="flex items-center gap-3 text-green-600 mb-3">
                  {layanan.icon}
                  <h3 className="text-lg font-semibold">{layanan.title}</h3>
                </div>
                <p className="text-gray-700 text-sm">{layanan.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Keunggulan */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-10">
            Kenapa Memilih GODIG?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefitList.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="bg-green-100 p-3 rounded-full mb-2 text-green-600">
                  {benefit.icon}
                </div>
                <p className="text-sm font-medium text-gray-700">
                  {benefit.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section className="py-16 px-4 bg-green-50">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
          Apa Kata Mereka Tentang GODIG?
        </h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView="auto"
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 2,
            disableOnInteraction: false,
          }}
          speed={3000} // Semakin tinggi, semakin halus
          grabCursor={true}
          className="cursor-grab"
        >
          {testimonies.map((item, idx) => (
            <SwiperSlide key={idx} style={{ width: "300px" }}>
              <div className="bg-white border rounded-xl p-6 shadow h-full flex flex-col justify-between">
                <div className="flex gap-2 items-start mb-2 text-green-500">
                  <Quote />
                  <p className="text-sm text-left text-gray-700 italic">
                    {item.text}
                  </p>
                </div>
                <p className="text-sm font-semibold text-green-700 text-right mt-4">
                  — {item.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-green-600 text-white text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Siap Bawa Bisnismu ke Dunia Digital?
          </h2>
          <p className="mb-6">GODIG siap bantu kamu mulai dari sekarang!</p>
          <Link
            to="/kontak"
            className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-100 transition"
          >
            Hubungi Sekarang
          </Link>
        </motion.div>
      </section>

      <Footer />
    </PageWrapper>
  );
};

export default Home;
