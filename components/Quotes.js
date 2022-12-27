import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Quotes = () => {
  return (
    <div className="bg-black py-20 flex text-center flex-col items-center text-yellow-700">
      <div className="container px-10 md:px-40 mx-auto">
        <h1 className="flex justify-center mb-5">
          <FaQuoteLeft className="text-3xl" />
        </h1>
        <p className="text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, quia
          magnam dolore commodi aliquid veniam quae pariatur suscipit soluta et
          eveniet eos, sint omnis recusandae provident enim. Et, rerum
          dignissimos eligendi, consequatur officiis exercitationem nobis animi
          porro, maxime molestias cupiditate.
        </p>
        <div className="my-5 flex items-center justify-center">
          <div className="border  w-16 border-dotted border-yellow-700"></div>
          <div className="text-xl mx-3">Lorem Ipsum</div>
          <div className="border border-dotted w-16 border-yellow-700"></div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
