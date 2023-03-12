import Image from "next/image";
import Link from "next/link";
import React from "react";
import pic from "../../assets/seyz1.jpg";

const BlogPostcard = () => {
  return (
    <div className="mx-5">
      <Link href={"/blog/post"}>
        {" "}
        <Image className="h-52 object-cover" src={pic} alt="picture" />
      </Link>
      <div>
        <h1 className="text-yellow-700 uppercase text-xl font-bold">
          Check your heart
        </h1>
        <div className="text-gray-500">
          <div>
            {" "}
            <span className="text-sm">14, Nov, 2022</span>
          </div>
          <div>
            {" "}
            <span className="uppercase">Check your Heart</span>
          </div>
          <div>
            <Link href="/blog/post">Read More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostcard;
