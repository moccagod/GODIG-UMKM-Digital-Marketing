import { Link } from "react-router-dom";
import { Instagram, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-100 text-black">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        {/* Logo & Deskripsi */}
        <div>
          <h2 className="text-2xl font-bold text-green-600">GODIG</h2>
          <p className="mt-2 text-sm text-gray-700">
            Solusi digital marketing untuk UMKM. Bantu bisnismu berkembang
            bersama kami!
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Navigasi</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-green-600">
                Beranda
              </Link>
            </li>
            <li>
              <Link to="/layanan" className="hover:text-green-600">
                Layanan
              </Link>
            </li>
            <li>
              <Link to="/artikel" className="hover:text-green-600">
                Artikel
              </Link>
            </li>
            <li>
              <Link to="/kontak" className="hover:text-green-600">
                Kontak
              </Link>
            </li>
          </ul>
        </div>

        {/* Sosial Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Hubungi Kami</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Instagram className="w-5 h-5" />
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-600"
              >
                @godig.id
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-600"
              >
                +62 812-3456-7890
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-green-200 py-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} GODIG. Make with ❤️ by <a href="https://moccagod.github.io/portofolio/" target="_blank">Azmi Nailal Hadi</a>.
      </div>
    </footer>
  );
};

export default Footer;
