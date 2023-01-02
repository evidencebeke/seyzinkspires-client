import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, subject, message });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="px-3 rounded-lg md:order-2 space-y-5"
    >
      <div className="space-y-1">
        <label htmlFor="name">Your Name</label>
        <input
          className="block focus:text-yellow-700 rounded-md border-2 focus:border-yellow-700/40 outline-none w-4/5 md:w-2/3 p-1 "
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="email">Email</label>
        <input
          className="block focus:text-yellow-700 rounded-md border-2 focus:border-yellow-700/40 outline-none w-4/5 md:w-2/3 p-1 "
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="subject">Subject</label>
        <input
          className="block focus:text-yellow-700 rounded-md border-2 focus:border-yellow-700/40 outline-none w-4/5 md:w-2/3 p-1 "
          type="text"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          className="block focus:text-yellow-700 rounded-md border-2 resize-none focus:border-yellow-700/40 outline-none w-4/5 md:w-2/3 p-1 "
          cols="30"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-yellow-600/50  py-2 rounded-full px-10 text-left"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
