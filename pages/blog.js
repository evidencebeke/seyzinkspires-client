import Head from "next/head";
import React from "react";
import { getPosts } from "../apiFunctions/blog";
import Blog from "../components/blog/Blog";

// import Seo from "../components/commons/Seo";

const BlogPage = ({ posts }) => {
  console.log(posts);
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
        <Blog posts={posts} />
      </div>
    </>
  );
};

export default BlogPage;

export async function getStaticProps() {
  const data = await getPosts();
  return {
    props: {
      posts: data ? data : [],
    },
    revalidate: 5,
  };
}
