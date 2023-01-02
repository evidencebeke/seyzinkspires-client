import React from "react";
import BlogPostcard from "./BlogPostcard";

const Blog = () => {
  return (
    <div className="w-full">
      <div className="w-full bg-gray-800 bg-blend-darken bg-[url(https://img.freepik.com/premium-photo/flat-lay-background-flower-pattern-valentine-s-day-theme-lovers-red-roses-gifts-with-ribbons-white-background-isolated_182816-912.jpg?w=740)]">
        <div className="container mx-auto py-10 text-gray-200">
          <h1 className="text-5xl font-thin text-center md:text-left"> Blog</h1>
        </div>
      </div>
      <div className="container my-10 grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto">
        <BlogPostcard />
        <BlogPostcard />
        <BlogPostcard />
        <BlogPostcard />
        <BlogPostcard />
      </div>
    </div>
  );
};

export default Blog;
