import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import {} from "react-icons";
import { getImageUrl } from "../../../apiFunctions/helpers";

const Card = ({ book }) => {
  return (
    <div className="w-[100%]  shadow-xl">
      <div>
        <Image
          className="h-[200px] w-[100%] object-contain"
          // src={`http://127.0.0.1:1337${book.Picture.data.attributes.url}`}
          src={book.Picture.data.attributes.url}
          width={120}
          height={140}
          alt="Book cover"
        />
        <div className="flex flex-col gap-4 p-[20px]">
          <div>
            <h2 className="font-bold text-primary"> {book.Title} </h2>
          </div>

          <div className="text-secondary text-small">
            <span>N{book.Price}</span>
          </div>
          <div>
            <a href="https://selar.co/m/damilolaadeniji">
              {" "}
              <ArrowLongRightIcon className="w-[30px] text-secondary" />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
