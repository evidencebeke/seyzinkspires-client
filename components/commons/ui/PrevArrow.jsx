import React from "react";
import { BsChevronLeft } from "react-icons/bs";

const PrevArrow = ({ onClick }) => {
  return (
    <div className="absolute right-[80px] -top-[80px]" onClick={onClick}>
      <div className="bg-primary h-[40px] w-[40px] rounded-full grid place-items-center cursor-pointer">
        <BsChevronLeft className="text-white" />
      </div>
    </div>
  );
};

export default PrevArrow;
