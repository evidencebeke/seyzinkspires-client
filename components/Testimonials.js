import React from "react";
import Image from "next/image";
import picture from "../assets/builder.jpg";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <div className="bg-black text-white">
      <div className=" container mx-auto">
        <h1 className="text-center text-yellow-700 font-extrabold text-4xl mb-12 ">
          What People Say
        </h1>
        <div className="w-full flex space-x-5 overflow-x-scroll  p-10 snap-x snap-mandatory  scrollbar-thin scrollbar-track-gray-400/10  scrollbar-thumb-yellow-600/40">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
