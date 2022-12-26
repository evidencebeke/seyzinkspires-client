import React from "react";
import Image from "next/image";
import picture from "../assets/builder.jpg";

const TestimonialCard = () => {
  return (
    <article className="flex text-center flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-full md:w-[300px] xl:w-[500px] snap-center p-5 bg-[#202020] top-40">
      <Image src={picture} className="w-24 h-24 rounded-full" />
      <p>
        Time and again, I'll say SEYZ has been amazing. I've had times when I
        sit down and marvel at the plane of inteligence she speaks from
        alongside the wisdom she dispenses when it comes to giving practical
        counsel to issues pertaining to relationships and marriage alongside
        personal development. I recommend her to my friends and as many as need
        her services
      </p>
      <div>
        <div className="text-yellow-700">Ilesanmi Kayode</div>
        <div className="text-slate-500">Construction Engineer</div>
      </div>
    </article>
  );
};

export default TestimonialCard;
