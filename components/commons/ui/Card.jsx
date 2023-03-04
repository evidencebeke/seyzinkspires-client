import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import {} from "react-icons";

const Card = ({ title, description, price, imageUrl }) => {
  return (
    <div className="w-[100%]  shadow-xl">
      <div>
        <Image
          className="h-[200px] w-[100%] object-contain"
          src={imageUrl}
          width={120}
          height={140}
          alt="Book cover"
        />
        <div className="flex flex-col gap-4 p-[20px]">
          <div>
            <h2 className="font-bold text-primary"> {title} </h2>
          </div>
          <div>
            <p>{description}</p>
          </div>
          <div className="text-secondary text-small">
            <span>N{price}</span>
          </div>
          <div>
            <Link href="/">
              {" "}
              <ArrowLongRightIcon className="w-[30px] text-secondary" />{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
