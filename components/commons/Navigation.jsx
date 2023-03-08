import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../assets/logo2.png";
import PrimaryButton from "./ui/PrimaryButton";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
const Navigation = () => {
  const [open, setOpen] = useState(false);
  const handleOpenNav = () => setOpen(true);
  const handleCloseNav = () => setOpen(false);
  return (
    // <nav className="p-4 z-50  flex font-semibold text-white text-base tracking-wider bg-lightgray">
    //   <div className="flex  container mx-auto justify-between">
    //     <div className=" flex ">
    //       {" "}
    //       <Image
    //         className="h-[40px] object-contain"
    //         height={120}
    //         width={150}
    //         src={logo}
    //         alt="logo"
    //       />{" "}
    //     </div>
    //     <div className="md:flex hidden items-center">
    //       <ul className=" flex space-x-5 lg:space-x-10">
    //         <li>Home</li>
    //         <li>About</li>
    //         <li>Store</li>
    //         <li>Blog</li>
    //         <li>Contact Us</li>
    //       </ul>
    //     </div>
    //     <div className="hidden md:flex items-center ">
    //       {" "}
    //       <PrimaryButton>Get in touch</PrimaryButton>
    //     </div>
    //     <div className="navMobile text-black md:hidden">
    //       <span className="text-white" onClick={openNav}>
    //         open
    //       </span>
    //       <div
    //         className={`h-full md:hidden w-full top-0 bottom-0 bg-green  absolute`}
    //       >
    //         {/* <span className="absolute top-3 right-3" onClick={closeNav}>
    //           close
    //         </span> */}
    //         <ul className=" flex flex-col items-center  justify-center space-y-10">
    //           <li>Home</li>
    //           <li>About</li>
    //           <li>Store</li>
    //           <li>Blog</li>
    //           <li>Contact Us</li>
    //         </ul>
    //         <div className="mt-12">
    //           <PrimaryButton>Get in touch</PrimaryButton>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
    <nav className="bg-slate-900 ">
      <div className="flex items-center p-2 font-medium justify-between container mx-auto">
        <div className=" p-5 md:w-auto w-full flex justify-between">
          <Image
            className="  md:cursor-pointer"
            height={120}
            width={150}
            src={logo}
            alt="logo"
          />
          <div className="text-xl md:hidden" onClick={handleOpenNav}>
            <span className="text-white">Open</span>
          </div>
        </div>
        <ul className=" uppercase md:flex hidden items-center text-zinc-50 gap-8">
          <li>
            <Link className="py-7 px-3 inline-block" href="/">
              Home
            </Link>{" "}
          </li>
          <li>
            <Link className="py-7 px-3 inline-block" href="/">
              About
            </Link>{" "}
          </li>
          <li>
            <Link className="py-7 px-3 inline-block" href="/">
              Store
            </Link>{" "}
          </li>
          <li>
            <Link className="py-7 px-3 inline-block" href="/">
              Testimonials
            </Link>{" "}
          </li>
          <li>
            <Link className="py-7 px-3 inline-block" href="/">
              Blog
            </Link>{" "}
          </li>
          <li>
            <Link className="py-7 px-3 inline-block" href="/">
              Contact
            </Link>{" "}
          </li>
        </ul>
        <div className="md:block hidden">
          <PrimaryButton>Get in touch</PrimaryButton>
        </div>
        {/* mobile nav */}
        <ul
          className={`
          md:hidden flex flex-col bg-white z-40  fixed w-full top-0 scrollbar-none overflow-y-auto bottom-0 py-14 pl-4
          duration-500 ${open ? "left-0" : "left-[-100%]"}
          `}
        >
          <li className="self-end px-5" onClick={handleCloseNav}>
            <span>close</span>
          </li>
          <li>
            <Link className="py-7 px-3 inline-block" href="/">
              Home
            </Link>{" "}
          </li>
          <li>
            <Link className="py-7 px-3 inline-block" href="/">
              About
            </Link>{" "}
          </li>
          <li>
            <Link className="py-7 px-3 inline-block" href="/">
              Store
            </Link>{" "}
          </li>
          <li>
            <Link className="py-7 px-3 inline-block" href="/">
              Testimonials
            </Link>{" "}
          </li>

          <li>
            <Link className="py-7 px-3 inline-block" href="/">
              Blog
            </Link>{" "}
          </li>
          <li>
            <Link className="py-7  px-3 inline-block" href="/">
              Contact
            </Link>{" "}
          </li>
          <li className="self-center">
            <PrimaryButton>Get in touch</PrimaryButton>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
