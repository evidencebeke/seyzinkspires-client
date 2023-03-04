import { useRouter } from "next/router";
import Navigation from "../components/commons/Navigation";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Navigation />
      <div className="relative top-[72px]">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
