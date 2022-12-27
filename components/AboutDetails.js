import Image from "next/image";
import React from "react";
import seyz from "../assets/seyz2.jpg";

const AboutDetails = () => {
  return (
    <div className="flex mx-5 md:mx-16 mt-10 flex-col lg:flex-row justify-center items-center md:space-x-10 ">
      <Image src={seyz} className="md:w-[50%] w-[90%] rounded-lg" />
      <div className=" mx-5">
        <h1 className="text-center lg:text-left text-2xl md:text-4xl text-yellow-600 my-10">
          About Me
        </h1>
        <p className="text-center lg:text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae quasi
          aliquam velit, perferendis ipsum mollitia ex magnam est ut animi
          laudantium corrupti, cum blanditiis ratione pariatur accusantium
          labore tempore consequatur eligendi modi dolorum distinctio! Porro ab
          vero aliquid repellat odit iusto nihil vel iure. Neque error tempora,
          quae quidem blanditiis quis, excepturi, architecto odio aut id
          aspernatur earum non hic maiores quam tempore itaque magni adipisci
          libero ea. Porro molestias veniam magnam dicta provident sint nesciunt
          quisquam animi esse earum mollitia dolorum aliquid laboriosam aliquam
          ipsa ab neque quod asperiores perferendis ut autem, omnis soluta
          architecto? Rem assumenda voluptates corrupti. enim.
        </p>
        <div className="flex justify-center lg:justify-start">
          {" "}
          <button className="px-5 mt-6 py-2 rounded-full bg-yellow-700 border border-white">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutDetails;
