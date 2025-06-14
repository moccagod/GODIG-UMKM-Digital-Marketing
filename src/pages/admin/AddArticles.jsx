import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabase/client";
import PageWrapper from "../../components/PageWrapper";
import AdminLayout from "../../layouts/AdminLayout";
import RequireAuth from "../../components/RequireAuth";

const AddArticles = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    const { data: user } = await supabase.auth.getUser();
    const userId = user?.user?.id;

    const { error } = await supabase.from("articles").insert([
      {
        title,
        content,
        thumbnail_url: thumbnailUrl,
        created_by: userId,
      },
    ]);

    setLoading(false);

    if (error) {
      setErrorMsg("Gagal menyimpan artikel. Silakan coba lagi.");
    } else {
      navigate("/admin/artikel");
    }
  };

  return (
    <RequireAuth>
      <PageWrapper>
        <AdminLayout>
          <div className="max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-black">
              Tambah Artikel Baru
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-black">
                  Judul
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full mt-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black">
                  Konten
                </label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows="6"
                  className="w-full mt-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black">
                  Thumbnail URL
                </label>
                <input
                  type="text"
                  value={thumbnailUrl}
                  onChange={(e) => setThumbnailUrl(e.target.value)}
                  className="w-full mt-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Opsional"
                />
              </div>

              {errorMsg && <p className="text-red-500">{errorMsg}</p>}

              <button
                type="submit"
                disabled={loading}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
              >
                {loading ? "Menyimpan..." : "Simpan Artikel"}
              </button>
            </form>
          </div>
        </AdminLayout>
      </PageWrapper>
    </RequireAuth>
  );
};

export default AddArticles;
