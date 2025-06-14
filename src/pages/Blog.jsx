import React, { useEffect, useState } from "react";
import { supabase } from "../supabase/client";
import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [totalArticles, setTotalArticles] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);

      // Hitung total artikel
      const { count } = await supabase
        .from("articles")
        .select("*", { count: "exact", head: true })
        .ilike("title", `%${searchTerm}%`);

      setTotalArticles(count || 0);

      // Ambil data artikel sesuai halaman
      const from = (currentPage - 1) * itemsPerPage;
      const to = from + itemsPerPage - 1;

      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .order("created_at", { ascending: false })
        .ilike("title", `%${searchTerm}%`)
        .range(from, to);

      if (!error) setArticles(data);
      setLoading(false);
    };

    fetchArticles();
  }, [searchTerm, currentPage]);

  const totalPages = Math.ceil(totalArticles / itemsPerPage);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset ke halaman 1 saat search
  };

  return (
    <PageWrapper>
      <Navbar />

      <div className="min-h-screen px-4 py-12 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-green-700 text-center">
          Artikel dan Tips Digital Marketing
        </h1>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Cari judul artikel..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full md:w-1/2 border border-gray-300 rounded-lg px-4 py-2"
          />
        </div>

        {loading ? (
          <p>Memuat artikel...</p>
        ) : articles.length === 0 ? (
          <p className="text-center text-gray-500">
            Tidak ada artikel ditemukan.
          </p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                to={`/artikel/${article.id}`}
                key={article.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
              >
                {article.thumbnail_url && (
                  <img
                    src={article.thumbnail_url}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-green-700 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {new Date(article.created_at).toLocaleDateString()}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalArticles > itemsPerPage && (
          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="text-sm text-gray-600">
              Halaman <strong>{currentPage}</strong> dari{" "}
              <strong>{totalPages}</strong>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
                disabled={currentPage === 1}
              >
                ⬅ Sebelumnya
              </button>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
                disabled={currentPage === totalPages}
              >
                Selanjutnya ➡
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </PageWrapper>
  );
};

export default Blog;
