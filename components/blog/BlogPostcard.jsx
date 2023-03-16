import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getImageUrl } from "../../apiFunctions/helpers";
import pic from "../../assets/seyz1.jpg";

const BlogPostcard = ({ post }) => {
  let { Body, Title, Picture, Slug } = post.attributes;

  return (
    <div className="mx-5">
      <Link href={`/blog/${Slug}`}>
        {" "}
        <Image
          className="h-52  object-cover"
          src={Picture.data.attributes.url}
          alt="picture"
          width={500}
          height={200}
        />
      </Link>
      <div>
        <h1 className="text-yellow-700 uppercase text-xl font-bold">{Title}</h1>
        <div className="text-gray-500">
          <div>
            {" "}
            <span className="text-sm">14, Nov, 2022</span>
          </div>
          <div>
            {" "}
            <span className="uppercase">{Title}</span>
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
