import Link from "next/link";
import React, { useState } from "react";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "../../assets/logo1.png";

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <nav className="bg-gray-900 fixed w-full text-gray-200 z-40 py-4">
      <div className="container flex items-center mx-auto">
        <div className="flex">
          <Link href={"/"}>
            {" "}
            <Image alt="logo" width={150} src={logo} />
          </Link>
        </div>
        <div
          onClick={() => setOpenNav(!openNav)}
          className="md:hidden flex items-center ml-auto z-50"
        >
          {!openNav ? (
            <Bars3BottomLeftIcon className="h-10  " />
          ) : (
            <XMarkIcon className="h-10 " />
          )}
        </div>
        <ul className="md:flex items-center hidden lgScreenNav font-medium tracking-widest  uppercase space-x-10 ml-auto">
          <li>
            <Link href="/">Home</Link>{" "}
          </li>
          <li>
            <Link href="/about">About</Link>{" "}
          </li>
          <li>
            <Link href="/blog">Blog</Link>{" "}
          </li>
          <li>
            <Link href="/store">Store</Link>{" "}
          </li>
          <li>
            <Link href="/contact">Contact</Link>{" "}
          </li>
        </ul>

        {/* <ul className="md:hidden object-contain flex absolute flex-col items-center bg-gray-600 w-full h-screen top-20 font-medium tracking-widest  uppercase space-x-10 ml-auto"> */}
        <ul
          className={`md:hidden absolute bg-slate-900/90 bottom-0 top-20 right-0 left-0 duration-500 ${
            openNav ? "left-0" : "left-[-100%]"
          } navBar h-screen w-full font-medium tracking-widest py-10 space-y-12 overflow-y-auto uppercase z-30 pl-4`}
        >
          <li>
            <Link href="/">Home</Link>{" "}
          </li>
          <li>
            <Link href="about">About</Link>{" "}
          </li>
          <li>
            <Link href="blog">Blog</Link>{" "}
          </li>
          <li>
            <Link href="store">Store</Link>{" "}
          </li>
          <li>
            <Link href="/contact">Contact</Link>{" "}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
