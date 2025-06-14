import { useState, useEffect } from "react";
import { supabase } from "../../supabase/client";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../../components/PageWrapper";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkScreen = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMsg("Email atau password salah!");
    } else {
      navigate("/admin/dashboard");
    }
  };

  return (
    <PageWrapper>
      <div className="min-h-screen flex items-center justify-center bg-green-300 px-4">
        <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
          {isMobile ? (
            <div className="text-center">
              <h2 className="text-xl font-bold text-red-600 mb-4">
                Akses Ditolak
              </h2>
              <p className="text-sm text-gray-700">
                Halaman login admin hanya bisa diakses melalui perangkat
                <strong> desktop</strong>.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-center text-black mb-6">
                Login Admin GODIG
              </h2>
              <p className="text-sm text-gray-600 text-center mb-4">
                Masuk untuk mengelola konten dan artikel
              </p>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-black">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
                    required
                  />
                </div>

                {errorMsg && (
                  <p className="text-sm text-red-500 text-center">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                >
                  Login
                </button>
              </form>

              <div className="mt-6 text-center">
                <a
                  href="/"
                  className="text-sm text-green-700 hover:underline transition"
                >
                  ← Kembali ke Halaman Utama
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </PageWrapper>
  );
};

export default AdminLogin;
