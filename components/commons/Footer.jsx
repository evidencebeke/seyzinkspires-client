import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import PrimaryButton from "./ui/PrimaryButton";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import Loader from "../ui/Loader";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const emailJsService = process.env.SERVICE;
  const emailJsTemplate = process.env.TEMPLATE;
  const emailJsKey = process.env.KEY;

  const submitForm = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        emailJsService,
        emailJsTemplate,
        {
          subject,
          name,
          message,
          email,
        },
        emailJsKey
      )
      .then(
        (result) => {
          setLoading(false);
          toast.success("Your message was sent successfully");
          setName("");
          setMessage("");
          setEmail("");
          setSubject("");
        },
        (error) => {
          setLoading(false);
          toast.error("Send failed. Check your connection");
        }
      );
  };
  console.log({ emailJsService, emailJsTemplate, emailJsKey });
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
          <PrimaryButton onClick={submitForm}>
            {" "}
            {loading ? <Loader /> : "Submit"}
          </PrimaryButton>
        </form>
      </div>
      <div className="flex space-x-4 justify-center">
        <SocialIcon
          fgColor="white"
          bgColor="#ffb84d"
          url="https://www.facebook.com/Seyz01/"
        />
        {/* <SocialIcon
          fgColor="white"
          bgColor="#ffb84d"
          url="https://twitter.com/evidencebeke"
        /> */}
        <SocialIcon
          fgColor="white"
          bgColor="#ffb84d"
          url="https://ng.linkedin.com/in/damilola-adeniji"
        />

        <SocialIcon
          fgColor="white"
          bgColor="#ffb84d"
          url="https://www.instagram.com/seyz_inkspires/"
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
