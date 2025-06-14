import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../supabase/client";
import PageWrapper from "../../components/PageWrapper";
import RequireAuth from "../../components/RequireAuth";
import AdminLayout from "../../layouts/AdminLayout";

const ManageArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      const { data, error } = await supabase
        .from("articles")
        .select("id, title, created_at")
        .order("created_at", { ascending: false });

      if (!error) setArticles(data);
      setLoading(false);
    };

    fetchArticles();
  }, []);

  return (
    <RequireAuth>
      <PageWrapper>
        <AdminLayout>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-black">Manajemen Artikel</h1>
            <Link
              to="/admin/artikel/tambah"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              + Tambah Artikel
            </Link>
          </div>

          {loading ? (
            <p className="text-gray-500">Memuat...</p>
          ) : articles.length === 0 ? (
            <p className="text-gray-600">Belum ada artikel.</p>
          ) : (
            <div className="space-y-4">
              {articles.map((article) => (
                <Link
                  key={article.id}
                  to={`/admin/artikel/${article.id}`}
                  className="block border p-4 rounded hover:bg-green-50 transition"
                >
                  <h2 className="text-lg font-semibold text-black">
                    {article.title}
                  </h2>
                  <p className="text-sm text-gray-600">
                    {new Date(article.created_at).toLocaleString()}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </AdminLayout>
      </PageWrapper>
    </RequireAuth>
  );
};

export default ManageArticles;
