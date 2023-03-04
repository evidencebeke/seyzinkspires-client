import Image from "next/image";
import React from "react";
import picture from "../../assets/seyz2.jpg";
const Expressions = () => {
  return (
    <div>
      <div className="container justify-around px-5 items-center flex flex-col md:flex-row mx-auto">
        <div>
          <Image
            className="h-[250px]  xl:w-[400px] xl:h-[400px] w-[250px] rounded-full object-contain"
            src={picture}
            alt="Damilola Seyz"
          />
        </div>
        <div className="md:w-1/2 w-full mt-7 mx-5">
          <h1 className="text-2xl capitalize md:text-4xl  font-bold tracking-wider leading-snug text-lightgray">
            My <span className="text-primary">kingdom</span> Expressions
          </h1>
          <div>
            <p className="text-gray">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, provident.
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Expressions;
