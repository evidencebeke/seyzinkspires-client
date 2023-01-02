import React from "react";

import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <div className=" text-gray-700">
      <div className=" container py-8 mx-auto">
        <h1 className="text-center md:text-4xl mb-10 text-2xl text-yellow-500">
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
