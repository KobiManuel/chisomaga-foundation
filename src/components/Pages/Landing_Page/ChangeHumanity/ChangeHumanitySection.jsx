import React from "react";
import Wrapper from "../../../UI/Wrapper";
import welcome_bg from "../../../../assets/hero6.jpg";
import Button from "../Button/Button";
import styles from "../Button/TransparentBtn.module.css";
const ChangeHumanitySection = () => {
  return (
    <Wrapper>
      <div
        className="body-font font-TomatoFont max-w-[80%] mx-auto px-4 flex justify-between items-center max-[665px]:justify-center gap-3"
        style={{
          backgroundImage: "url(" + welcome_bg + ")",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
          maxWidth: "85%",
          height: "265px",
        }}
      data="fade-up">
        <div className=" max-w-[428.33px] max-h-[105px] pl-8 max-[665px]:pl-0">
          <p className=" capitalize text-white font-semibold text-[35px] max-[665px]:text-[20px]">
            Let's change the world with humanity
          </p>
        </div>
        <div className=" w-fit pr-8 max-[665px]:pr-0 max-[410px]:hidden">
          <Button type="button" className={styles.button}>
            Donate
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default ChangeHumanitySection;
