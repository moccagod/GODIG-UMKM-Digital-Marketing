import React from "react";
import PageWrapper from "../components/PageWrapper";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Blog = () => {
  return (
    <PageWrapper>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        Artikel
      </div>
      <Footer />
    </PageWrapper>
  );
};

export default Blog;
