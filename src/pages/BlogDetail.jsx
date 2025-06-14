import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { supabase } from "../supabase/client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageWrapper from "../components/PageWrapper";
import { FaWhatsapp, FaFacebookF, FaXTwitter, FaLink } from "react-icons/fa6";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [recentArticles, setRecentArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const currentUrl = window.location.href;

  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        setLoading(false);
        return navigate("/artikel");
      }

      setArticle(data);
      setLoading(false);
    };

    fetchArticle();
  }, [id]);

  useEffect(() => {
    const fetchRecent = async () => {
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .neq("id", id)
        .order("created_at", { ascending: false })
        .limit(3);

      if (!error) setRecentArticles(data);
    };

    fetchRecent();
  }, [id]);

  if (loading) {
    return (
      <PageWrapper>
        <Navbar />
        <div className="min-h-screen flex justify-center items-center">
          <p>Memuat artikel...</p>
        </div>
        <Footer />
      </PageWrapper>
    );
  }

  if (!article) {
    return (
      <PageWrapper>
        <Navbar />
        <div className="min-h-screen flex justify-center items-center">
          <p>Artikel tidak ditemukan.</p>
        </div>
        <Footer />
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 pt-8 md:pt-16">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
          {article.title}
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          {new Date(article.created_at).toLocaleDateString()}
        </p>

        {/* Tombol Share */}
        <div className="flex items-center gap-3 mb-8 flex-wrap">
          <span className="text-sm text-gray-600">Bagikan:</span>
          <button
            onClick={() =>
              window.open(
                `https://wa.me/?text=${encodeURIComponent(
                  `Lihat ${article.title} di GODIG sekarang juga ! - ${currentUrl}`
                )}`,
                "_blank"
              )
            }
            className="bg-green-100 hover:bg-green-200 text-green-600 p-2 rounded-full transition"
            title="Share ke WhatsApp"
          >
            <FaWhatsapp size={18} />
          </button>
          <button
            onClick={() =>
              window.open(
                `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  currentUrl
                )}`,
                "_blank"
              )
            }
            className="bg-blue-100 hover:bg-blue-200 text-blue-600 p-2 rounded-full transition"
            title="Share ke Facebook"
          >
            <FaFacebookF size={18} />
          </button>
          <button
            onClick={() =>
              window.open(
                `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  currentUrl
                )}&text=Lihat ${encodeURIComponent(
                  article.title
                )} di GODIG sekarang juga!`,
                "_blank"
              )
            }
            className="bg-black/10 hover:bg-black/20 text-black p-2 rounded-full transition"
            title="Share ke X (Twitter)"
          >
            <FaXTwitter size={18} />
          </button>
          <button
            onClick={() => {
              navigator.clipboard.writeText(currentUrl);
              toast.success("Link artikel disalin!");
            }}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full transition"
            title="Salin Link"
          >
            <FaLink size={18} />
          </button>
        </div>

        {/* Thumbnail */}
        {article.thumbnail_url && (
          <img
            src={article.thumbnail_url}
            alt={article.title}
            className="w-full h-auto rounded-lg shadow mb-6"
          />
        )}

        {/* Konten Artikel */}
        <div
          className="prose prose-green max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>

      {/* Artikel Terbaru */}
      <div className="mt-16 border-t py-10 max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6 text-green-700">
          Artikel Terbaru
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {recentArticles.map((item) => (
            <Link
              to={`/artikel/${item.id}`}
              key={item.id}
              className="bg-white rounded-lg shadow hover:shadow-md transition"
            >
              {item.thumbnail_url && (
                <img
                  src={item.thumbnail_url}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
              )}
              <div className="p-4">
                <h3 className="text-md font-semibold text-green-700">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  {new Date(item.created_at).toLocaleDateString()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </PageWrapper>
  );
};

export default BlogDetail;
