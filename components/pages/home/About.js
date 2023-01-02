import React from "react";
import {
  FaPeopleArrows,
  FaPeopleCarry,
  FaMicroscope,
  FaObjectGroup,
} from "react-icons/fa";
import AboutDetails from "./AboutDetails";
import KingdomExpression from "./KingdomExpression";

const About = () => {
  return (
    <div className=" py-20 text-gray-700">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center text-white">
          <h1 className="text-center md:text-4xl mb-10 text-2xl text-yellow-500">
            My Kingdom Expressions
          </h1>
          <div className="mx-5 grid grid-cols-1 gap-10 md:grid-cols-3">
            <KingdomExpression
              icon={<FaPeopleArrows className="text-yellow-700 text-5xl" />}
            />
            <KingdomExpression
              icon={<FaPeopleArrows className="text-yellow-700 text-5xl" />}
            />
            <KingdomExpression
              icon={<FaPeopleArrows className="text-yellow-700 text-5xl" />}
            />
            <KingdomExpression
              icon={<FaPeopleArrows className="text-yellow-700 text-5xl" />}
            />
            <KingdomExpression
              icon={<FaPeopleArrows className="text-yellow-700 text-5xl" />}
            />
            <KingdomExpression
              icon={<FaPeopleArrows className="text-yellow-700 text-5xl" />}
            />
          </div>
        </div>
        <AboutDetails />
      </div>
    </div>
  );
};

export default About;
