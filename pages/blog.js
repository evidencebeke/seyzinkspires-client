import React from "react";
import Nav from "../components/commons/Nav";
import Seo from "../components/commons/Seo";
import Blog from "../components/pages/blog/Blog";
import Footer from "../components/pages/home/Footer";

const BlogPage = () => {
  return (
    <div>
      <Seo
        title={"SeyzInkspires - Blog"}
        description={"Latest News and Articles"}
      />
      <Nav />
      <div className="relative flex min-h-screen flex-col justify-between top-16 pt-8">
        <Blog />
        <Footer />
      </div>
    </div>
  );
};

export default BlogPage;
