import Head from "next/head";
import React from "react";

const Seo = ({ title, description }) => {
  return (
    <Head>
      <title>{title || "Loading"}</title>
      <meta name="description" content={description || "Loading"} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Seo;
