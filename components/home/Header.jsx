import Image from "next/image";
import React from "react";
import hero from "../../assets/dark1.png";
import PrimaryButton from "../commons/ui/PrimaryButton";
const list = [
  { data: "Students", value: "10k+" },
  { data: "Books", value: "10+" },
  { data: "Public Engagements", value: "100+" },
];
const Header = () => {
  return (
    <section className=" py-6  min-h-screen">
      <div className="container  p-6 mx-auto flex-col lg:flex-row justify-center  flex  items-center ">
        <div className=" space-y-6 text-center md:text-left ">
          <h1 className="text-lightgray text-2xl md:text-6xl font-bold tracking-wider leading-snug">
            <span className="text-primary">Learn</span> How to Build and Attract
            a Healthy Relationship
          </h1>
          <p className="font-semibold md:w-[70%] text-gray">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque sed
            itaque possimus cum facilis repellat ut corporis iste, illo quos
            optio dolor eum ab at. Nulla voluptates iusto veritatis, dolor
            deleniti quasi eius?
          </p>
          <PrimaryButton>Get in touch</PrimaryButton>
        </div>
        <div>
          <Image
            className="h-[300px]"
            src={hero}
            width={775}
            height={787}
            alt="Hero img"
          />
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex items-center flex-col md:flex-row py-7 border-none w-10/12 rounded-2xl shadow-2xl   mx-auto md:justify-around justify-center space-x-5 ">
          {list.map((item) => (
            <div className="flex space-y-4 flex-col justify-center items-center">
              <p className="text-4xl text-primary text-center font-semibold">
                {item.value}
              </p>
              <p className="text-center font-semibold text-gray text-lg">
                {item.data}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Header;
// Learn how to build and attract a healhy relationship
