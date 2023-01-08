import React from "react";
import styles from "./ActivityCard.module.css";

const ActivityCard = ({ children, className }) => {
  return (
    <div
      className={` shadow-2xl p-[40px] w-[80%] justify-center  lg:h-[400px] lg:w-[351.38px] max-[1040px]:w-[80%] max-[1040px]:h-[300px] rounded-[24px]  flex flex-col items-center ${styles.card} ${className}`}
    >
      {children}
    </div>
  );
};

export default ActivityCard;
