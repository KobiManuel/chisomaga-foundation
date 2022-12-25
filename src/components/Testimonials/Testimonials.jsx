import React, { useState } from "react";
import Wrapper from "../UI/Wrapper";
import { TestimonialsInfo } from "../ComponentData/TestimonialsData";
import TestimonialsCard from "../Cards/TestimonialsCard";
import Button from "../Button/Button";

const Testimonials = () => {
  const [visible, setVisible] = useState(3);
  const showMoreOrLessHandler = (event) => {
    setVisible((prevValue) => prevValue + 3)
    if (event.target.textContent === "Show Less") {
      setVisible((prevValue) => prevValue - prevValue + 3)
    }
  }
  return (
    <Wrapper bg_color=" !bg-[#f1f6f9]">
      <header
        id="about"
        className="body-font font-TomatoFont w-[570px] max-[580px]:w-[80%] h-[270px] mx-auto text-center"
      >
        <h5 className="text-[var(--primary)] text-lg leading-10">
          What People Say
        </h5>
        <h2 className=" capitalize text-[var(--blue)] max-[580px]:text-[30px] text-5xl leading-[1.4]">
          Feedback from people we've helped
        </h2>
      </header>
      <div className=" flex flex-row flex-wrap justify-center items-center w-[100%] max-w-[1100px] mx-auto max-[675px]:flex-col">
        {TestimonialsInfo.slice(0, visible).map(
          ({ subtitle, image, personsName, occupation }) => (
            <TestimonialsCard
              subtitle={subtitle}
              image={image}
              personsName={personsName}
              occupation={occupation}
              key={Math.random().toString()}
            />
          )
        )}
      </div>
      <div className=" mt-2 mx-auto w-fit">
      <Button className=" text-white" onClick={showMoreOrLessHandler}>{visible >= 6 ? "Show Less" : "Show More" }</Button>
      </div>
    </Wrapper>
  );
};

export default Testimonials;
