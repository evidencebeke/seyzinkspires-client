import React from "react";
import About from "../components/about/About";
import Seo from "../components/commons/Seo";

const AboutPage = () => {
  return (
    <div>
      <Seo title={"About"} description={"About me"} />

      <div>
        <About />
      </div>
    </div>
  );
};

export default AboutPage;
