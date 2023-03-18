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
        <div className="md:w-1/2 w-full mt-7 mx-5">
          <h1 className="text-2xl capitalize md:text-4xl text-center md:text-left  font-bold tracking-wider leading-snug text-lightgray">
            About <span className="text-primary">me</span>
          </h1>
          <div className=" text-gray text-lg text-justify leading-loose font-semibold my-3">
            <p className="">
              Damilola Adeniji fondly called Seyz, is a Christian and
              multi-potentialite.
            </p>
            <p className="text-gray">
              Seyz is a multi-award winning writer and the lead trainer,
              <span className="font-bold ">SeyzINKspires</span> where top-notch
              writing and editorial services are provided.
            </p>
            <p>
              As an award-winning and certified Relationship Counsellor, she is
              passionate about helping people (singles especially) break-free
              from toxic and undefined relationships. she achieves this through
              her brand,{" "}
              <span className="font-bold">
                Relationship Affairs with Rayz (RAYZ)
              </span>{" "}
              , private counselling sessions, invites, speaking engagements and
              writings.
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
