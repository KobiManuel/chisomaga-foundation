import React from "react";

const TestimonialsCard = ({subtitle, image, personsName, occupation}) => {
  return (
      <div className=" shadow-2xl body-font font-TomatoFont bg-white md:max-w-[30%] w-[30%] max-h-fit mx-2 my-2 max-[675px]:w-[80%]">
       <div className=" w-[100%] max-w-[100%] max-h-fit flex flex-col gap-6 justify-center items-center p-[30px]">
        <div className=" w-[100%] max-w-[100%]">
          <p className=" text-[var(--blue)] text-sm">
           {subtitle}
          </p>
        </div>
        <div className="flex flex-row  items-center w-full max-w-full">
        <img
              className="w-[70px] h-[70px] rounded-full object-cover"
              src={image}
              alt="/"
            />
            <div className=" pl-[10px]">
                <p className=" capitalize text-[var(--blue)] font-semibold ">{personsName}</p>
                <p className=" capitalize  text-gray-400 text-xs">{occupation}</p>
            </div>
        </div>
        </div>
      </div>
  );
};

export default TestimonialsCard;
