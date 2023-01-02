import React from "react";

import Nav from "../components/commons/Nav";
import Seo from "../components/commons/Seo";
import About from "../components/pages/about/About";
import Footer from "../components/pages/home/Footer";

const AboutPage = () => {
  return (
    <div>
      <Seo title={"Seyzinkspires - About"} description="Read about me here" />
      <Nav />
      <div className="relative top-16 pt-8 min-h-screen flex flex-col justify-between">
        <About />
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
