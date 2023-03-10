import Image from "next/image";
import React from "react";
import darkBackgroundPic from "../../../assets/dark.jpg";

const Banner = () => {
  return (
    <div className="py-28 text-gray-700 bg-cover bg-[url(https://images.unsplash.com/photo-1520671486401-ba5f2ab2213c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)]">
      <div className="flex flex-col md:flex-row items-center container mx-auto">
        <Image
          alt="Banner inmage"
          className="w-4/5 md:w-1/2 mx-7 object-contain rounded-lg mb-10"
          src={darkBackgroundPic}
        />
        <div className="xl:mr-28 ml-10">
          <div className="text-lg">
            <span>Lorem iPsum | &nbsp;</span>
            <span>Lorem iPsu | &nbsp;</span>
            <span>Lorem iPsum</span>
          </div>
          <h1 className="text-yellow-700 text-3xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo,
            aperiam!
          </h1>
          <p className="text-lg leading-loose mr-5 mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            corporis doloremque quod accusamus nobis repellendus quaerat? Minus
            repellat esse, inventore similique, reiciendis mollitia iusto
            exercitationem tempore beatae minima accusamus sequi! Magnam veniam
            non beatae ipsum pariatur similique eaque blanditiis consequatur.
          </p>
          <button className="bg-white uppercase text-yellow-700 hover:border-white border hover:bg-yellow-700 transition hover:text-white rounded-full border-yellow-300 px-6 py-2 mt-10">
            Get in touch with me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
