import React from "react";
import Image from "next/image";
import picture from "../../assets/builder.jpg";

const TestimonialCard = ({ image, name, desc, text }) => {
  return (
    <article className="flex text-center flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-full md:w-[300px] shadow-lg xl:w-[500px] snap-center p-5 bg-slate-100 text-gray top-40">
      <Image
        alt="Testifier's picture"
        src={image}
        className="w-24 h-24 rounded-full"
        width={240}
        height={300}
      />
      <p className="text-gray-300 tracking-wide leading-loose">{text}</p>
      <div>
        <div className="text-secondary">{name}</div>
        <div className="text-slate-500">{desc}</div>
      </div>
    </article>
  );
};

export default TestimonialCard;
