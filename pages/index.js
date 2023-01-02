import Head from "next/head";
import { ToastContainer } from "react-toastify";
import About from "../components/pages/home/About";

import Banner from "../components/pages/home/Banner";

import Nav from "../components/commons/Nav";
import Quotes from "../components/pages/home/Quotes";
import Testimonials from "../components/pages/home/Testimonials";
import "react-toastify/dist/ReactToastify.css";
import Seo from "../components/commons/Seo";
import Footer from "../components/pages/home/Footer";

export default function Home() {
  return (
    <div className="flex flex-col justify-between">
      <Seo
        title={"Seyzinkspires - Home"}
        description={"Welcome to our Homepage"}
      />

      <Nav />

      <div className="relative top-20">
        <Banner />
        <Quotes />
        <About />
        <Testimonials />
        <Footer />
        <ToastContainer />
      </div>
    </div>
  );
}
