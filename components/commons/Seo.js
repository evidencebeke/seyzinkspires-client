import Head from "next/head";
import React from "react";

const Seo = ({ title, description }) => {
  return (
    <Head>
      <title> {title} </title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    </Head>
  );
};

export default Seo;
