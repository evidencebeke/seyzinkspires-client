import React from "react";
import Nav from "../components/commons/Nav";
import Seo from "../components/commons/Seo";
import Contact from "../components/pages/contact/Contact";
import Footer from "../components/pages/home/Footer";

const ContactPage = () => {
  return (
    <div>
      <Seo
        title={"Seyzinkspires - Contact"}
        description="Fill the form, or use the contact information available"
      />
      <Nav />
      <div className="relative top-20 pt-8 min-h-screen flex flex-col justify-between">
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
