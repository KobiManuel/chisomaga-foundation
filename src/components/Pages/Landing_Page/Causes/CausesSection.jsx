import React from "react";
import CausesCard from "../../../Cards/CausesCard";
import Wrapper from "../../../UI/Wrapper";
import { causesInfo } from "../../../ComponentData/CausesCard_data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CausesSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 799,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <Wrapper id="causes" bg_color=" !bg-[#f1f6f9]" data="fade-left">
      <header
        id="about"
        className="body-font font-TomatoFont w-[570px] max-[580px]:w-[80%] h-[270px] mx-auto text-center"
      >
        <h5 className="text-[var(--primary)] text-lg leading-10">
          Our Causes You Can See
        </h5>
        <h2 className=" capitalize text-[var(--blue)] max-[580px]:text-[30px] text-5xl leading-[1.4]">
          Explore the latest causes we've worked on
        </h2>
      </header>
      <Slider
        {...settings}
        className=" overflow-hidden px-4  flex flex-wrap justify-between items-center max-w-[1100px] mx-auto"
      >
        {causesInfo.map(({ image, subtitle, progress, raisedAmount, goal }) => (
          <CausesCard
            image={image}
            subtitle={subtitle}
            progress={progress}
            raisedAmount={raisedAmount}
            goal={goal}
            key={Math.random().toString()}
          />
        ))}
      </Slider>
    </Wrapper>
  );
};

export default CausesSection;
