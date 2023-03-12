import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import PrimaryButton from "./ui/PrimaryButton";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    console.log({ name, email, subject, message });
  };
  return (
    <footer id="contact" className="bg-slate-900 py-10 text-zinc-200 ">
      <div className="container px-5 p-10 grid grid-cols-1 gap-10 md:grid-cols-2 mx-auto">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold tracking-wide leading-normal">
            Need any of our services? Any questions? Contact us...
          </h1>
          <p className="text-lg my-5">
            If you are here it means you want to start a journey. We would love
            to know you and take you on that journey.{" "}
          </p>
        </div>
        <form className="space-y-5">
          <div>
            <label className="block" htmlFor="name">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
            />
          </div>
          <div>
            <label className="block" htmlFor="email">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label className="block" htmlFor="subject">
              Subject
            </label>
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              type="text"
              id="subject"
            />
          </div>
          <div>
            <label className="block" htmlFor="text">
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              id="text"
              cols="30"
              rows="2"
            ></textarea>
          </div>
          <PrimaryButton onClick={submitForm}>Submit</PrimaryButton>
        </form>
      </div>
      <div className="flex space-x-4 justify-center">
        <SocialIcon
          fgColor="white"
          bgColor="#ffb84d"
          url="https://api.whatsapp.com/send?phone=+2348165716353text=Hello"
        />
        <SocialIcon
          fgColor="white"
          bgColor="#ffb84d"
          url="https://facebook.com/evidencebeke"
        />
        <SocialIcon
          fgColor="white"
          bgColor="#ffb84d"
          url="https://twitter.com/evidencebeke"
        />
        <SocialIcon
          fgColor="white"
          bgColor="#ffb84d"
          url="https://linkedin.com/evidencebeke"
        />
      </div>
      <div className=" text-center md:text-left container my-5 mx-auto px-5">
        <p>
          Copyright &copy; {new Date().getFullYear()} All Rights Reserved by
          DamiSeyz
        </p>
      </div>
    </footer>
  );
};

export default Footer;
