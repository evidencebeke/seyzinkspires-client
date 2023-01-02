import Image from "next/image";
import Link from "next/link";
import React from "react";
import bookPic from "../../../assets/book.jpg";

const ProductCard = () => {
  return (
    <div className="mx-5">
      <Image className="h-52" src={bookPic} alt="picture" />
      <div>
        <h1 className="text-yellow-700 uppercase text-lg font-bold">
          book title
        </h1>
        <div className="text-gray-500">
          <div>
            {" "}
            <span className="text-sm">NGN 10,000</span>
          </div>
          <div>
            <Link href="/">
              <button className="px-5 py-2 bg-yellow-700/40 rounded-full">
                Buy now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
