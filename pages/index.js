import Head from "next/head";
import { ToastContainer } from "react-toastify";
import About from "../components/About";

import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Nav from "../components/Nav";
import Quotes from "../components/Quotes";
import Testimonials from "../components/Testimonials";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>SeyzInkspires</title>
        <meta name="description" content="Love, Marriage, Relationship" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />

      <Banner />
      <Quotes />
      <About />
      <Testimonials />
      <Contact />
      <ToastContainer />
    </div>
  );
}
