import React from "react";
import MySlider from "../commons/ui/Slider";

const Books = () => {
  return (
    <section className="px-5 my-10">
      <div className="container  mx-auto">
        <div>
          <h1 className="font-bold text-3xl">My latest books</h1>
        </div>
        <div>
          <MySlider />
        </div>
      </div>
    </section>
  );
};

export default Books;
