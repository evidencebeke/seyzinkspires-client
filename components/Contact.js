import React, { useRef, useState } from "react";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import Loader from "./ui/Loader";
import { SocialIcon } from "react-social-icons";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_rz8joie",
        "template_czlo0qi",
        {
          subject,
          name,
          message,
          email,
        },
        "KuwLhPBIMfbEJiRUG"
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
          console.log(message);
        }
      );
  };
  return (
    <div className="bg-black py-28 text-white">
      <div className=" container mx-auto">
        <h1 className="text-center text-4xl text-yellow-600 mb-5">
          Contact Me
        </h1>
        <div className="flex  flex-col space-y-10">
          <div className="text-slate-300">
            <div className="flex mb-4 items-center space-x-5 justify-center">
              <PhoneIcon className="text-yellow-600 animate-pulse h-7 w-7" />{" "}
              <p>+2349015575260</p>
            </div>
            <div className="flex items-center space-x-5 justify-center">
              <EnvelopeIcon className="text-yellow-600 animate-pulse h-7 w-7" />{" "}
              <p>lorem@ipsum.com</p>
            </div>
          </div>
          <form
            onSubmit={sendEmail}
            className="flex flex-col space-y-2 w-fit mx-auto"
          >
            <div className="flex sm:space-x-2 space-y-2 sm:space-y-0 flex-col sm:flex-row ">
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="contactInput"
                placeholder="Name"
                type="text"
              />
              <input
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="contactInput"
                placeholder="Email"
                type="email"
              />
            </div>
            <input
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="contactInput placeholder:capitalize"
              placeholder="subject"
              type="text"
            />
            <textarea
              className="resize-none contactInput"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              type="submit"
              className="bg-yellow-600/40 transition hover:bg-slate-300 hover:text-yellow-600/40 py-2 px-6 flex text-slate-300 justify-center"
            >
              {loading ? <Loader /> : "Submit"}
            </button>
          </form>
          <div className="flex justify-center">
            <SocialIcon
              fgColor="grey"
              bgColor="transparent"
              url="https://instagram.com"
            />
            <SocialIcon
              fgColor="grey"
              bgColor="transparent"
              url="https://facebook.com"
            />
            <SocialIcon
              fgColor="grey"
              bgColor="transparent"
              url="https://linkedin.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
