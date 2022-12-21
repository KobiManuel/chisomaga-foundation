import { React, useState } from "react";
import SimpleSlider from "../UI/SimpleSlider";
import Button from "../Button/Button";
const Hero = () => {
  return (
    <div
      id="hero"
      className="max-h-[820px] body-font font-TomatoFont relative"
    >
         <div className=" absolute top-[25%] ml-20 max-[786px]:ml-[5px] max-w-[1100px] max-[712px]:top-[10%] flex flex-col z-40 hero_overlay leading-[5rem]">
        <header>
          <h1 className=" text-[102px] max-[562px]:text-[80px] font-medium text-white">Donate</h1>
          <h4 className="text-[50px] max-[562px]:text-[40px] font-medium text-white">4 a better world</h4>
        </header>
        <div className="header-subtitle w-[609.99px] h-[50.39px]">
          <p className=" text-base text-white font-medium leading-7 max-[562px]:text-[15px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            tempus vestibulum mauris quis aliquam. Integer accumsan sodales
            odio, id tempus ullamcorper
          </p>
        </div>
        <Button type="button" className=" w-[173.98px] h-[54px] flex justify-center items-center mt-10 text-white focus:outline-none rounded-full bg-[var(--primary)]">Donate now</Button>
      </div>
      <SimpleSlider />
    </div>
  );
};

export default Hero;
