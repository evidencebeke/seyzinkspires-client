import React from "react";
import { BsChevronRight } from "react-icons/bs";

const NextArrow = ({ onClick }) => {
  return (
    <div className="absolute right-0 -top-[80px]" onClick={onClick}>
      <div className="bg-primary h-[40px] w-[40px] rounded-full grid place-items-center cursor-pointer">
        <BsChevronRight className="text-white" />
      </div>
    </div>
  );
};

export default NextArrow;
