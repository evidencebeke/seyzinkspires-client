const Footer = () => {
  // const [email, setEmail] = useState("");
  // const [subject, setSubject] = useState("");
  // const [message, setMessage] = useState("");
  // const [name, setName] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   emailjs
  //     .send(
  //       "service_rz8joie",
  //       "template_czlo0qi",
  //       {
  //         subject,
  //         name,
  //         message,
  //         email,
  //       },
  //       "KuwLhPBIMfbEJiRUG"
  //     )
  //     .then(
  //       (result) => {
  //         setLoading(false);
  //         toast.success("Your message was sent successfully");
  //         setName("");
  //         setMessage("");
  //         setEmail("");
  //         setSubject("");
  //       },
  //       (error) => {
  //         setLoading(false);
  //         toast.error("Send failed. Check your connection");
  //         console.log(message);
  //       }
  //     );
  // };
  return (
    <div className="bg-black py-8 text-center text-white">
      <div className=" container mx-auto">
        ©{new Date().getFullYear()} LoremIpsum.com | All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
