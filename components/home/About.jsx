import Image from "next/image";
import Link from "next/link";
import React from "react";
import picture from "../../assets/seyz2.jpg";
const About = () => {
  return (
    <div id="about">
      <div className="container justify-around px-2 items-center flex flex-col md:flex-row mx-auto">
        <div>
          <Image
            className="h-[250px]  xl:w-[400px] xl:h-[400px] w-[250px] rounded-full object-contain"
            src={picture}
            alt="Damilola Seyz"
          />
        </div>
        <div className="md:w-1/2 w-full mt-7 mx-10">
          <h1 className="text-2xl capitalize md:text-4xl text-center md:text-left  font-bold tracking-wider leading-snug text-lightgray">
            About <span className="text-primary">me</span>
          </h1>
          <div className=" text-gray space-y-4 text-lg tracking-wide leading-relaxed my-3">
            <p className="">
              Damilola Adeniji fondly called Seyz, is a Christian and
              multi-potentialite.
            </p>
            <p className="text-gray">
              Seyz is a multi-award winning writer and the lead trainer, &nbsp;
              <span className="font-bold ">SeyzINKspires</span> where top-notch
              writing and editorial services are provided.
            </p>
            <p>
              As an award-winning and certified relationship coach, she is
              passionate about helping people (singles and teenagers
              especially), break free from wrong relationships, heal from past
              trauma, become whole, and experience true (God-kind) love.
            </p>
            <p>
              {" "}
              She achieves this through written resources (books and social
              media content), audio and visuals, speaking engagements, RAYZ
              communities, one-on-one coaching/therapy sessions, school
              outreach, and physical events.
            </p>
            <Link className="text-secondary" href="/about">
              Read More...
            </Link>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default About;
