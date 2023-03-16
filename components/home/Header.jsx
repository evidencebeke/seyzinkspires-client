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
    <section className=" py-6 bg-[url(https://images.unsplash.com/photo-1520671486401-ba5f2ab2213c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)] min-h-screen">
      <div className="container  p-6 mx-auto flex-col px-10 md:flex-row justify-center  flex  items-center ">
        <div className=" space-y-6  md:w-1/2 text-center md:text-left ">
          <h1 className="text-lightgray text-3xl md:text-5xl font-bold tracking-wider leading-snug">
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
        <div className="md:w-1/2 flex my-10 justify-center ">
          <Image className="w-full object-cover" src={hero} alt="Hero img" />
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex items-center flex-col md:flex-row py-7 border-none w-10/12 rounded-2xl shadow-2xl   mx-auto md:justify-around justify-center space-x-5 ">
          {list.map((item, i) => (
            <div
              key={i}
              className="flex space-y-4 flex-col justify-center items-center"
            >
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
