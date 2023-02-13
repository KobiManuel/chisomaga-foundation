import { React } from "react";
import SimpleSlider from "../../../UI/SimpleSlider";
import Button from "../Button/Button";
import styles from "../Button/TransparentBtn.module.css";
import Typed from "react-typed";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <div
      id="hero"
      className="max-h-[820px] body-font font-TomatoFont relative max-[380px]:h-[250px]"
    >
      <div className=" absolute top-[25%] ml-20 max-[786px]:ml-[5px] max-w-[1100px] max-[712px]:top-[10%] flex flex-col z-40 hero_overlay leading-[5rem]  max-[395px]:text-center max-[395px]:w-[100%] max-[395px]:items-center max-[395px]:justify-center">
        <header className=" max-[330px]:hidden">
          <h1 className=" text-[102px] max-[562px]:text-[80px] font-medium text-white max-[435px]:text-[60px] max-[435px]:leading-[1rem]  max-[414px]:text-[40px] ">
            Donate
          </h1>
          <h4 className="text-[50px] max-[562px]:text-[40px] font-medium text-white max-[414px]:text-[30px]">
            4{" "}
            <Typed
              strings={[
                "a better World",
                "a better Tomorrow",
                "a better Nigeria",
              ]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </h4>
        </header>
        <div className="header-subtitle w-[609.99px] h-[50.39px] max-[652px]:hidden">
          <p className=" text-base text-white font-medium leading-7 max-[562px]:text-[15px]">
            Welcome to The Chisomaga Foundaton website, take a look around and
            explore all our activities and causes. Join us in building a new
            future together.
          </p>
        </div>
        <div className=" flex gap-5 mt-[4rem] max-[532px]:mt-0">
          <Button
            type="button"
            className=" text-white !shadow-2xl max-[395px]:!hidden"
            onClick={() => navigate("/donate")}
          >
            Donate now
          </Button>
          <a className="block" href="https://form.jotform.com/230426555559563">
            <Button type="button" className={styles.button}>
              Apply for Grant
            </Button>
          </a>
        </div>
      </div>
      <SimpleSlider />
    </div>
  );
};

export default Hero;
