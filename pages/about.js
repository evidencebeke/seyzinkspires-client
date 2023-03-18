import React from "react";
import { getPosts } from "../apiFunctions/blog";
import About from "../components/about/About";
import Navigation from "../components/commons/Navigation";
import Seo from "../components/commons/Seo";

const AboutPage = () => {
  return (
    <div>
      <Seo title={"About"} description={"About me"} />

      <div>
        <Navigation />
        <About />
      </div>
    </div>
  );
};

export default AboutPage;

export async function getStaticProps() {
  const data = await getPosts();
  return {
    props: {
      books: data ? data : [],
    },
    revalidate: 5,
  };
}
