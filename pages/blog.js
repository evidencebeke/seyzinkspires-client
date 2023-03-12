import Head from "next/head";
import React from "react";
import Blog from "../components/blog/Blog";

// import Seo from "../components/commons/Seo";

const BlogPage = () => {
  return (
    <>
      <Head>
        <title>SeyzINKspires - Blog</title>
        <meta
          name="description"
          content="Blog news and Articles from SeyzINKspires"
        />
      </Head>

      <div>
        <Blog />
      </div>
    </>
  );
};

export default BlogPage;
