import React from "react";
import Nav from "../components/commons/Nav";
import Seo from "../components/commons/Seo";
import Footer from "../components/pages/home/Footer";
import Store from "../components/pages/store/Store";

const StorePage = () => {
  return (
    <div>
      <Seo title={"SeyzInkspires - Store"} description={"Books and courses"} />
      <Nav />
      <div className="relative flex min-h-screen flex-col justify-between top-16 pt-8">
        <Store />
        <Footer />
      </div>
    </div>
  );
};

export default StorePage;
