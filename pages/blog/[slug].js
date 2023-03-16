import Markdown from "markdown-to-jsx";

import Head from "next/head";
import Image from "next/image";
import React from "react";
import { getPost, getPosts } from "../../apiFunctions/blog";
import { formatDistance } from "date-fns";
import { useRouter } from "next/router";

const Article = ({ post, otherPosts }) => {
  console.log(post, otherPosts);
  const router = useRouter();
  let article = post.attributes;

  let timePublished = new Date(article.publishedAt);
  let publishedSince = formatDistance(timePublished, new Date(), {
    addSuffix: true,
  });
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>Blog article</title>
        <meta name="description" content="Blog Article description" />
      </Head>
      <div className="space-y-10 my-10">
        <div className="text-center">
          <h1 className="text-2xl md:4xl mx-5 md:mx-[20%] font-bold mb-5">
            {article.Title}
          </h1>
        </div>
        <div className="bg-primary h-80">
          <Image
            alt="Post Image"
            className=" h-full object-cover w-full"
            src={article.Picture.data.attributes.url}
            width={250}
            height={150}
          />
        </div>

        <div className="flex space-x-3 items-center mx-5 md:mx-[20%]">
          <div className="w-10 h-10 rounded-full">
            <Image
              alt="Poster Image"
              className="h-full object-cover rounded-full w-full"
              src="/assets/seyz2.jpg"
              width={250}
              height={150}
            />
          </div>
          <div>
            <h6 className="capitalize">Damilola Seyz Adeniji</h6>
            <p> {publishedSince} </p>
          </div>
        </div>
        <div className="mx-5 md:mx-[20%] text-justify text-lg leading-relaxed tracking-wide">
          <Markdown
            options={{
              overrides: {
                img: {
                  props: {
                    className: "w-full",
                  },
                },
              },
            }}
          >
            {article.Body}
          </Markdown>
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  let data = await getPosts();
  let posts = Array.isArray(data) ? data : [];
  let paths = posts.map((post) => ({
    params: {
      slug: post.attributes.Slug,
    },
  }));
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  let post = await getPost(slug);
  let data = await getPosts();

  if (!post) {
    return {
      notFound: true,
    };
  }
  post = post[0];
  return {
    props: {
      post: post ? post : null,
      otherPosts: data.filter((article) => article.id !== post.id),
    },
    revalidate: 10,
  };
}

export default Article;
