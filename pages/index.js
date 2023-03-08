import Head from "next/head";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import About from "../components/home/About";
import Books from "../components/home/Books";

import Header from "../components/home/Header";
import KingdomExpressions from "../components/home/KingdomExpressions";
import Quote from "../components/home/Quote";
import Testimonials from "../components/home/Testimonials";

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_API_URL);
  return (
    <>
      <Head>
        <title>DamiSeyz</title>
        <meta name="description" content="Damilola Seyz Adeniji" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <Header />
      <Quote />
      <About />
      <KingdomExpressions />
      <Books />
      <Testimonials />
    </>
  );
}
