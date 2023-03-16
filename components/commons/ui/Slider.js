import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Card from "./Card";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

const MySlider = ({ books }) => {
  const data = books;
  console.log(data);
  const [progress, setProgress] = useState(0);
  const [slidesToShow, setSlideToShow] = useState(4);
  const setSlides = () => {
    if (window.innerWidth <= 1280 && window.innerWidth > 1000) {
      setSlideToShow(3);
    } else if (window.innerWidth <= 1000 && innerWidth > 650) {
      setSlideToShow(2);
    } else if (window.innerWidth <= 650) {
      setSlideToShow(1);
    }
  };
  useEffect(() => {
    setSlides();
    setProgress(100 / (data.length - slidesToShow + 1));
    window.addEventListener("resize", () => {
      setSlides;
    });
  }, []);

  const settings = {
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1000,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 650,
        settings: { slidesToShow: 1 },
      },
    ],
    afterChange: (current) => {
      setProgress((100 / (data.length - slidesToShow + 1)) * (current + 1));
      console.log(slidesToShow);
    },
  };
  return (
    <div className="relative my-24 w-full">
      <Slider {...settings}>
        {data.map((book, i) => (
          <Card
            key={i}
            // title={book.Title}
            // price={book.Price}
            // imageUrl={book.Picture.data.attributes.formats.medium.url}
            book={book.attributes}
          />
        ))}
      </Slider>
      <div className="absolute -top-[15px]  right-0 bg-gray h-[2px] w-[250px]">
        <div
          className="bg-secondary absolute h-full transition-all"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default MySlider;
