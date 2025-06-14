import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../../supabase/client";
import PageWrapper from "../../components/PageWrapper";
import AdminLayout from "../../layouts/AdminLayout";
import RequireAuth from "../../components/RequireAuth";

const DetailArticles = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [artikel, setArtikel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState("");

  // Form state
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");

  useEffect(() => {
    const fetchArtikel = async () => {
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        setError("Artikel tidak ditemukan.");
      } else {
        setArtikel(data);
        setTitle(data.title);
        setContent(data.content);
        setThumbnailUrl(data.thumbnail_url || "");
      }
      setLoading(false);
    };

    fetchArtikel();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setUpdating(true);
    const { error } = await supabase
      .from("articles")
      .update({
        title,
        content,
        thumbnail_url: thumbnailUrl,
      })
      .eq("id", id);

    setUpdating(false);
    if (error) {
      setError("Gagal memperbarui artikel.");
    } else {
      navigate("/admin/artikel");
    }
  };

  const handleDelete = async () => {
    const confirm = window.confirm("Yakin ingin menghapus artikel ini?");
    if (!confirm) return;

    setDeleting(true);
    const { error } = await supabase.from("articles").delete().eq("id", id);
    setDeleting(false);

    if (error) {
      setError("Gagal menghapus artikel.");
    } else {
      navigate("/admin/artikel");
    }
  };

  return (
    <RequireAuth>
      <PageWrapper>
        <AdminLayout>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold text-black mb-4">Edit Artikel</h1>
            {loading ? (
              <p className="text-gray-500">Memuat artikel...</p>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : (
              <form onSubmit={handleUpdate} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-black">Judul</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-4 py-2 border rounded focus:ring-green-400 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black">Konten</label>
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows="8"
                    className="w-full px-4 py-2 border rounded focus:ring-green-400 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black">Thumbnail URL</label>
                  <input
                    type="text"
                    value={thumbnailUrl}
                    onChange={(e) => setThumbnailUrl(e.target.value)}
                    className="w-full px-4 py-2 border rounded focus:ring-green-400 focus:outline-none"
                    placeholder="Opsional"
                  />
                </div>

                {error && <p className="text-red-500">{error}</p>}

                <div className="flex gap-4">
                  <button
                    type="submit"
                    disabled={updating}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                  >
                    {updating ? "Menyimpan..." : "Simpan Perubahan"}
                  </button>
                  <button
                    type="button"
                    onClick={handleDelete}
                    disabled={deleting}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                  >
                    {deleting ? "Menghapus..." : "Hapus Artikel"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </AdminLayout>
      </PageWrapper>
    </RequireAuth>
  );
};

export default DetailArticles;
