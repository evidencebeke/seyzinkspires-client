import { useRouter } from "next/router";
import Footer from "../components/commons/Footer";
import Navigation from "../components/commons/Navigation";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div>
      <Navigation />
      <div>
        <Component {...pageProps} /> <Footer />
      </div>
    </div>
  );
}

export default MyApp;
