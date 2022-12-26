import React from "react";
import Wrapper from "../UI/Wrapper";
import { Link } from "react-scroll";
import footer_bg from '../../assets/footer_bg.png.webp';
import { FaTwitter, FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper style={{
      backgroundImage: 'url('+footer_bg+')',
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundAttachment: "fixed",
      width: "100%",
      maxWidth: "100%",
      height: "fit-content"
  }}>
      <div id="contact" className=" body-font font-TomatoFont text-white">
        <div className=" text-2xl font-semibold w-fit mx-auto">
          <p className=" after:content-['❤'] after:text-[var(--primary)] after:text-[19px] px-6 text-center">Chisomaga Foundation</p>
        </div>
        <div className=" w-fit mx-auto">
        <ul id="unorderedList" className="flex max-[454px]:flex-wrap items-center justify-center px-6  gap-7 text-sm font-extralight">
            <li className="hover:border-b-2 hover:text-[var(--primary)]  hover:border-b-[var(--primary)] cursor-pointer py-6 transition color ease-in-out duration-500 delay-150">
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="hover:border-b-2 hover:text-[var(--primary)]  hover:border-b-[var(--primary)] cursor-pointer py-6 transition color ease-in-out duration-500 delay-150">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                About Us
              </Link>
            </li>
            <li className="hover:border-b-2 hover:text-[var(--primary)]  hover:border-b-[var(--primary)] cursor-pointer py-6 transition color ease-in-out duration-500 delay-150">
              <Link
                to="causes"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Causes
              </Link>
            </li>
            <li className="hover:border-b-2 hover:text-[var(--primary)]  hover:border-b-[var(--primary)] cursor-pointer py-6 transition color ease-in-out duration-500 delay-150">
              <Link
                to="gallery"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                People
              </Link>
            </li>
            <li className="hover:border-b-2 hover:text-[var(--primary)]  hover:border-b-[var(--primary)] cursor-pointer py-6 transition color ease-in-out duration-500 delay-150">
              <Link
                to="news"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                News
              </Link>
            </li>
            <li className="hover:border-b-2 hover:text-[var(--primary)]  hover:border-b-[var(--primary)] cursor-pointer py-6 transition color ease-in-out duration-500 delay-150">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Contact
              </Link>
            </li>
           </ul>
        </div>
        <div className="flex gap-6 items-start cursor-pointer text-white w-fit mx-auto py-6 max-[231px]:hidden">
            <FaTwitter size={20} className=" w-9 transform hover:-scale-x-100 transition duration-500 ease-in-out hover:text-[var(--primary)]" />
            <FaFacebook size={20}  className=" w-9 transform hover:-scale-x-100 transition duration-500 ease-in-out hover:text-[var(--primary)]" />
            <FaInstagram size={20}  className="w-9 transform hover:-scale-x-100 transition duration-500 ease-in-out hover:text-[var(--primary)]" />
            <FaGoogle size={20}  className="w-9 transform hover:-scale-x-100 transition duration-500 ease-in-out hover:text-[var(--primary)]" />
          </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
