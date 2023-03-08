import React from "react";
import Footer from "../pages/home/Footer";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className="h-full flex-col">
      <Nav />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
