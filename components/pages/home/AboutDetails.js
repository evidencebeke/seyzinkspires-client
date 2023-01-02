import Image from "next/image";
import Link from "next/link";
import React from "react";
import seyz from "../../../assets/seyz2.jpg";

const AboutDetails = () => {
  return (
    <div className="flex my-10  pb-5 mx-5 md:mx-16 mt-10 shadow-lg shadow-slate-700 flex-col lg:flex-row justify-center items-center md:space-x-10 ">
      <Image
        alt="Damilola Seyz Adeniji"
        src={seyz}
        className="md:w-[50%] w-[90%] rounded-lg"
      />
      <div className="px-10 mx-5">
        <h1 className="text-center lg:text-left text-2xl md:text-4xl text-yellow-600 my-10">
          About Me
        </h1>
        <p className="text-center  lg:text-justify">
          Damilola Adeniji, fondly called Seyz, is a christian and a
          multi-potentialite. <br />
          Seyz is a multi award wining and certified relationship counselor. She
          is passionate about helping people (singles especially) break free
          from toic and undefined relationships. She achieves this through her
          brand, Relationship Affairs with Seyz (RAYZ), private counselling
          sessions, invites, speaking engagements and writings.
        </p>
        <div className="flex justify-center lg:justify-start">
          {" "}
          <Link href={"/about"}>
            {" "}
            <button className="px-5 mt-6 py-2 rounded-full hover:bg-white hover:text-yellow-700  bg-yellow-700 border border-white">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutDetails;
