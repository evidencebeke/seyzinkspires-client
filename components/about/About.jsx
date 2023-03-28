import Image from "next/image";
import React from "react";
import profilePic from "../../assets/seyz1.jpg";

const About = () => {
  return (
    <div className="w-full">
      <div className="w-full bg-slate-800  bg-blend-darken bg-[url(https://img.freepik.com/premium-photo/flat-lay-background-flower-pattern-valentine-s-day-theme-lovers-red-roses-gifts-with-ribbons-white-background-isolated_182816-912.jpg?w=740)]">
        <div className="container mx-auto py-10 text-gray-200">
          <h1 className="text-5xl text-white font-thin text-center md:text-left">
            {" "}
            About Me
          </h1>
        </div>
      </div>
      <div className="container flex flex-col py-10 items-center mx-auto">
        <Image
          alt="Damilola Seyz Adeniji"
          src={profilePic}
          className="w-4/6 md:w-[600px] object-contain"
        />
        <div className="space-y-5 tracking-wide leading-loose text-gray my-10 font-medium mx-5 md:mx-[10%]">
          <p>
            Damilola Adeniji, fondly called Seyz, is a christian and
            multi-potentialite.
          </p>
          <p>
            Seyz is a multi-award winning writer and the Lead Trainer,
            SeyzINKspires where top-notch writing an editorial services are
            provided.
          </p>
          <p>
            As an award-winning and certified relationship coach, she is
            passionate about helping people (singles and teenagers especially),
            break free from wrong relationships, heal from past trauma, become
            whole, and experience true (God-kind) love.
          </p>
          <p>
            {" "}
            She achieves this through written resources (books and social media
            content), audio and visuals, speaking engagements, RAYZ communities,
            one-on-one coaching/therapy sessions, school outreach, and physical
            events.
          </p>
          <p>
            {` Seyz (the awakened woman) is the Lead Visioneer of OYBC - Open Your
            Bible Community. A Community to get women awake in the daily study
            of God's Word, Prayers, and sharing of life lessons with
            Accountability. They had their first retreat between 17th - 21st
            December, 2021 with phenomenal speakers like Pastor Olu Olabode (The
            Purpose Midwife), Dr. Temitope Adetunji (The Purpose Evangelist),
            Damilola Seyz (Certified Relationship Counselor), which recorded
            amazing testimonies to the glory of God.`}
          </p>
          <p>
            By the grace of God, she is a young woman inspiring lives online and
            offline.
          </p>{" "}
        </div>
      </div>
    </div>
  );
};

export default About;
