import React from "react";

import TestimonialCard from "./TestimonialCard";
const testimonialData = [
  {
    image: "/assets/builder.jpg",
    name: "Ilesanmi Kayode Builder",
    desc: "Construction Engineer",
    text: " Time and again, I will say SEYZ has been amazing. I have had times when I sit down and marvel at the plane of inteligence she speaks from alongside the wisdom she dispenses when it comes to giving practical counsel to issues pertaining to relationships and marriage alongside personal development. I recommend her to my friends and as many as need her services",
  },
  {
    image: "/assets/writing-testimonial-1.jpg",
    name: "Alabi Blessing",
    desc: "",
    text: "Before I signed up for the writing class by SeyzINKspires Writer's Acadamy, i had a low self-esteem about my writing. I was unaware of mny things about writing. But when I got into the acadamy, the passion for writing camce upon me.  My colleagues and I were given several assignments by Coach Seyz  which were corrected when we did not get it correctly. Also, she encouraged us towards becoming great writers. Her coaching made me intentional about my growth, I'm ready to do whatever my growth requires, associate with the right people and most importantly to represent the kingdom of God in my content writin. Her class births the begining of my writing journey. All thanks to Coach Seyz",
  },
  {
    image: "/assets/writing-testimonial-2.jpg",
    name: "Raphael Williams",
    desc: "",
    text: "I am a proud beneficiary of SeyzINKspires top-notch writing and editorial services. For quite a while, I have been submitting my CV to different companies for employment when my initial business was not paying my bills as it used to anymore. Prior to when I used her service, I never received a call or mail for an invitation for interview from those companies. Guess what? I was granted an interview in one of the best banks in Nigeriawhen I used her service. And today, to the glory of God, I am an employee of the bank with a good pay. I knew something was wrong with my CV, so I had to consult a professinal for a CV revamp. Your guess is right. She did a great job by revamping my CV and it landed me a job I never dreamt I could have.",
  },
];
const Testimonials = () => {
  return (
    <div className=" text-gray-700 px-2 ">
      <div className=" container py-8 mx-auto">
        <h1 className="font-bold md:text-4xl mb-10 text-2xl">
          What <span className="text-primary"> People</span> Say
        </h1>
        <div className="w-full flex space-x-5 overflow-x-scroll  scrollbar-thin scrollbar-track-gray-400/10  scrollbar-thumb-yellow-600/40 p-10 snap-x snap-mandatory ">
          {testimonialData.map((item) => (
            <TestimonialCard
              image={item.image}
              name={item.name}
              text={item.text}
              desc={item.desc}
            />
          ))}
          {/* <TestimonialCard />
          <TestimonialCard /> */}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
