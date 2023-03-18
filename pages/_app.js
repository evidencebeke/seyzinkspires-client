import { useRouter } from "next/router";
import Footer from "../components/commons/Footer";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div>
      <div>
        <Component {...pageProps} /> <Footer />
      </div>
    </div>
  );
}

export default MyApp;
