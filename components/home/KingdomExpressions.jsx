import React from "react";
import { FaPeopleArrows, FaMicrophone, FaPenAlt } from "react-icons/fa";
import KingdomExpression from "./KingdomExpression";
const kingdomExpressions = [
  {
    topic: "Relationship Counselling/Coaching",
    body: (
      <p className="px-5 text-left leading-loose tracking-wide text-gray">
        I am a Certified Counselor & Relationship Minister, who has been sent to
        the heartbroken and individuals with a shattered past to bring healing
        and a revival of the presence of God and true love in relationships
        today. My mandate is to help people (singles and teenagers especially)
        break free from toxic relationships, heal from past traumas, become
        whole, and experience true (God-kind) love that can be expressed to
        others. <br /> Tired of repeated heartbreaks and unhealthy
        relationships? <br /> Hit me up for a private session
      </p>
    ),
    icon: <FaPeopleArrows className="text-primary text-4xl" />,
  },
  {
    topic: "Writing Services",
    body: (
      <p className="px-5 text-left leading-loose tracking-wide text-gray">
        As a phenomenal writer with over 3 years of experience, I weave words in
        the most beautiful ways you can imagine. I have been privileged to write
        for brands and companies, to increase sales, tell their brand story, or
        simply educate their audience. I am the Founder, SeyzINKspire, a growing
        firm with the passion and responsibility to raise exceptional writers
        with a kingdom mindset, and provide top-notch writing, editorial and
        administrative services. We can serve you with any/all of the following:{" "}
        <br />
        (a) Content Writing <br />
        (b) Brand Storytelling <br />
        (c) Copywritingleading-loose tracking-wide
        <br />
        (d) Professional Editing <br />
        (e) CV Writing <br />
        (f) Ghost Writing <br />
        (g) Virtual Assistant Services <br />
      </p>
    ),
    icon: <FaPenAlt className="text-primary text-4xl" />,
  },
  {
    topic: "Author/Speaker",
    body: (
      <p className="px-5 text-left leading-loose tracking-wide text-gray ">
        I have written free and paid books that you can use to transform your
        spirituality and relationship. Check the{" "}
        <a
          className="text-secondary font-bold"
          href="https://selar.co/m/damilolaadeniji"
        >
          Store
        </a>{" "}
        for some of my books. I also speak at churches, conferences, seminars,
        workshops, virtual events and so much more. You can book me for your
        event{" "}
        <a
          className="text-secondary font-bold"
          href="https://wa.me/2348165716353/?text=Hello"
        >
          here
        </a>
        .
      </p>
    ),
    icon: <FaMicrophone className="text-primary text-4xl" />,
  },
];
const KingdomExpressions = () => {
  return (
    <div className="my-10 bg-slate-100 py-10 px-2">
      <div className="container text-center space-y-3 mx-auto">
        <h1 className="text-2xl capitalize md:text-4xl   font-bold tracking-wide leading-snug text-lightgray">
          <span className="text-primary">My</span> kingdom expressions
        </h1>
        <p className="text-gray text-lg ">
          As a multi-potentialite, who is radiating the glory of Abba, I wear
          many hats and I deliver top-notch value in all my endeavours and
          commitments.
        </p>
        <div className=" grid grid-cols-1 gap-3 my-5 md:grid-cols-3">
          {kingdomExpressions.map((expression, i) => (
            <KingdomExpression
              key={i}
              topic={expression.topic}
              body={expression.body}
              icon={expression.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default KingdomExpressions;
