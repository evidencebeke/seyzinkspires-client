import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { SocialIcon } from "react-social-icons";

const ContactDetails = () => {
  return (
    <div className="flex flex-col space-y-7 px-3">
      <h1 className=" text-xl font-bold">My Contact Information</h1>
      <div className="flex hover:border-2 border-yellow-700/40 rounded-xl w-fit p-2 pr-14 space-x-3">
        {" "}
        <PhoneIcon className="h-7 w-7" /> <p>+2348012345678</p>
      </div>
      <div className="flex hover:border-2 border-yellow-700/40 rounded-xl w-fit p-2 pr-14 space-x-3">
        {" "}
        <EnvelopeIcon className="h-7 w-7" /> <p>example@gmail.com</p>{" "}
      </div>
      <div className="flex hover:border-2 border-yellow-700/40 rounded-xl w-fit p-2 pr-14 space-x-3">
        {" "}
        <MapPinIcon className="h-7 w-7" /> <p>Lagos, Nigeria</p>
      </div>
      <div className="flex">
        <div className="hover:bg-yellow-700 rounded-full">
          <SocialIcon
            fgColor="gray"
            bgColor="transparent"
            url="https://facebook.com"
          />
        </div>
        <div className="hover:bg-yellow-700 rounded-full">
          <SocialIcon
            fgColor="grey"
            bgColor="transparent"
            url="https://instagram.com"
          />
        </div>
        <div className="hover:bg-yellow-700 rounded-full">
          <SocialIcon
            fgColor="grey"
            bgColor="transparent"
            url="https://twitter.com"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
