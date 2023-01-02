import React from "react";
import Nav from "../../commons/Nav";

import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";
import Footer from "../../commons/Footer";

const Contact = () => {
  return (
    <div>
      <div className="mx-auto my-10 container">
        <div className="text-center mb-5">
          <h1 className="font-bold text-2xl">Contact Me</h1>
          <p>Fill out the form and I will get back to you soon</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 grid-">
          <ContactForm />
          <ContactDetails />
        </div>
      </div>
    </div>
  );
};

export default Contact;
