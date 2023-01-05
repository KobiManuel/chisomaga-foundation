import React from "react";
import Wrapper from "../../../UI/Wrapper";
import { Link } from "react-scroll";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaGoogle,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { BiMailSend } from "react-icons/bi";
import { TiLocationArrow } from "react-icons/ti";
import hero2 from '../../../../assets/hero2.jpg'
import hero3 from '../../../../assets/hero3.jpg'
import instagram from '../../../../assets/instagram.jpg'
import footer_bg from '../../../../assets/footer_bg.png.webp'



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
      <footer id="contact" className=" max-w-[1100px] mx-auto body-font font-TomatoFont ">
        <header className=" lg:w-full max-w-full h-fit md:w-[80%] md:mx-auto max-[768px]:w-[80%] max-[768px]:mx-auto grid md:grid-cols-2 grid-cols-1 gap-9 px-4 pb-9 border-b-[1px] border-solid border-[rgba(255,255,255,0.5)] mb-[3rem]">
          <div className=" text-2xl text-white font-semibold">
            <p className=" after:content-['❤'] after:text-[var(--primary)] after:text-[19px] after:pl-3">
              The Chisomaga Foundation
            </p>
          </div>
          <div className=" flex items-center md:justify-end cursor-pointer text-[#ffffff]">
            <FaTwitter
              size={20}
              className=" w-9 transform hover:-scale-x-100 transition duration-500 ease-in-out hover:text-[var(--primary)]"
            />
            <FaFacebook
              size={20}
              className=" w-9 transform hover:-scale-x-100 transition duration-500 ease-in-out hover:text-[var(--primary)]"
            />
            <FaInstagram
              size={20}
              className="w-9 transform hover:-scale-x-100 transition duration-500 ease-in-out hover:text-[var(--primary)]"
            />
            <FaGoogle
              size={20}
              className="w-9 transform hover:-scale-x-100 transition duration-500 ease-in-out hover:text-[var(--primary)]"
            />
          </div>
        </header>
        <div className=" lg:w-full h-fit grid lg:grid-cols-4 md:grid-cols-2 md:w-[80%] md:mx-auto max-[768px]:w-[80%] max-[768px]:mx-auto max-[304px]:text-xs ">
          <div className=" px-4 max-[375px]:w-[60%]  max-[375px]:px-0 ">
            <h4 className=" text-white text-xl mb-[30px]">Contact</h4>
            <div className=" text-[rgba(255,255,255,0.5)]">
              <ul className="flex flex-col gap-8">
                <li className=" flex items-center gap-6">
                  <span>
                    {" "}
                    <IoLocationOutline size={20} />{" "}
                  </span>
                  <span>203 Fake St. Mountain View, Lekki, Lagos, Nigeria</span>
                </li>
                <li className=" flex items-center gap-6">
                  <span>
                    {" "}
                    <FaPhoneAlt size={15} />{" "}
                  </span>
                  <span> +234 37 285 562</span>
                </li>
                <li className=" flex items-center gap-6">
                  <span>
                    {" "}
                    <BiMailSend size={20} />{" "}
                  </span>
                  <span> chisomaga-foundation@gmail.com</span>
                </li>
              </ul>
              <div className=" flex mt-7">
                <input
                  type="text"
                  className=" rounded-tl rounded-bl bg-transparent border-2 border-solid border-[#f37c03] outline-none h-[52px] text-center placeholder-[rgba(255,255,255,0.5)]"
                  placeholder="Enter email address"
                />
                <button
                  type="submit"
                  className=" rounded-tr rounded-br bg-[#f37c03] h-[52px] w-[52px] text-white text-center flex items-center justify-center"
                >
                  <TiLocationArrow size={35} />
                </button>
              </div>
            </div>
          </div>
          <div className=" px-4">
            <h4 className=" text-white text-xl mb-[30px] max-[768px]:mt-9">Learn More</h4>
            <div className="text-[#ffffff] ">
              <ul
                id="unorderedList"
                className="flex flex-col gap-1 justify-center"
              >
                <li className="border-b-[var(--primary)] border-b-2 hover:border-b-2 hover:text-[var(--primary)]  hover:border-b-[var(--primary)] cursor-pointer py-2 transition color ease-in-out duration-500 delay-150">
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
                <li className="border-b-transparent border-b-2 hover:border-b-2 hover:text-[var(--primary)]  hover:border-b-[var(--primary)] cursor-pointer py-2 transition color ease-in-out duration-500 delay-150">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    About
                  </Link>
                </li>
                <li className="border-b-transparent border-b-2 hover:border-b-2 hover:text-[var(--primary)]  hover:border-b-[var(--primary)] cursor-pointer py-2 transition color ease-in-out duration-500 delay-150">
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
                <li className="border-b-transparent border-b-2 hover:border-b-2 hover:text-[var(--primary)]  hover:border-b-[var(--primary)] cursor-pointer py-2 transition color ease-in-out duration-500 delay-150">
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
                <li className="border-b-transparent border-b-2 hover:border-b-2 hover:text-[var(--primary)]  hover:border-b-[var(--primary)] cursor-pointer py-2 transition color ease-in-out duration-500 delay-150">
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
                <li className="border-b-transparent border-b-2 hover:border-b-2 hover:text-[var(--primary)]  hover:border-b-[var(--primary)] cursor-pointer py-2 transition color ease-in-out duration-500 delay-150">
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
          </div>
          <div className="px-4 lg:mt-0 md:mt-9 max-[768px]:mt-9 ">
            <h4 className=" text-white text-xl mb-[30px]">Causes</h4>
            <div className=" flex flex-col  gap-6">
              <div className=" flex">
                <img src={hero3} alt="/"  className=" w-[80px] h-[80px] object-cover mr-6"/>
                <div>
                  <p className=" text-[#ffffff] mb-4 ">Supply Drinking Water To The People</p>
                  <p className=" text-[rgba(255,255,255,0.5)] text-[14px]">November 9, 2022. </p>
                </div>
              </div>
              <div className=" flex">
                <img src={hero2} alt="/"  className=" w-[80px] h-[80px] object-cover mr-6"/>
                <div>
                  <p className=" text-[#ffffff] mb-4">Providing Healthy Food For The Children</p>
                  <p className="text-[rgba(255,255,255,0.5)] text-[14px]">December 9, 2022. </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" px-4 lg:mt-0 md:mt-9 max-[768px]:mt-9">
          <h4 className=" text-white text-xl mb-[30px]">Instagram</h4>
          <div className=" w-full h-[200px]">
          <a className=" block" href="https://www.instagram.com/chisomagafoundation/" target="_blank" rel="noreferrer">
            <div className=" w-full h-[200px]" style={{
      backgroundImage: 'url('+instagram+')',
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "100%",
      height: "200px"
    }} href="https://www.instagram.com/chisomagafoundation/" target="_blank"></div>
    </a>
          </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Footer;

/*
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
          <p className=" after:content-['❤'] after:text-[var(--primary)] after:text-[19px] after:pl-3 px-6 text-center">The Chisomaga Foundation</p>
        </div>
        <div className=" w-fit mx-auto">
        <ul id="unorderedList" className="flex max-[454px]:flex-wrap items-center justify-center px-6  gap-11 text-sm font-extralight">
            <li className="border-b-[var(--primary)] border-b-2 hover:border-b-2 hover:text-[var(--primary)]  hover:border-b-[var(--primary)] cursor-pointer py-2 transition color ease-in-out duration-500 delay-150">
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
            <li className="border-b-transparent border-b-2 hover:border-b-2 hover:text-[var(--primary)]  hover:border-b-[var(--primary)] cursor-pointer py-2 transition color ease-in-out duration-500 delay-150">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="border-b-transparent border-b-2 hover:border-b-2 hover:text-[var(--primary)]  hover:border-b-[var(--primary)] cursor-pointer py-2 transition color ease-in-out duration-500 delay-150">
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
            <li className="border-b-transparent border-b-2 hover:border-b-2 hover:text-[var(--primary)]  hover:border-b-[var(--primary)] cursor-pointer py-2 transition color ease-in-out duration-500 delay-150">
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
            <li className="border-b-transparent border-b-2 hover:border-b-2 hover:text-[var(--primary)]  hover:border-b-[var(--primary)] cursor-pointer py-2 transition color ease-in-out duration-500 delay-150">
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
            <li className="border-b-transparent border-b-2 hover:border-b-2 hover:text-[var(--primary)]  hover:border-b-[var(--primary)] cursor-pointer py-2 transition color ease-in-out duration-500 delay-150">
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
        <div className=" flex gap-6 items-start cursor-pointer text-white w-fit mx-auto py-2 max-[231px]:hidden">
            <FaTwitter size={20} className=" w-9 transform hover:-scale-x-100 transition duration-500 ease-in-out hover:text-[var(--primary)]" />
            <FaFacebook size={20}  className=" w-9 transform hover:-scale-x-100 transition duration-500 ease-in-out hover:text-[var(--primary)]" />
            <FaInstagram size={20}  className="w-9 transform hover:-scale-x-100 transition duration-500 ease-in-out hover:text-[var(--primary)]" />
            <FaGoogle size={20}  className="w-9 transform hover:-scale-x-100 transition duration-500 ease-in-out hover:text-[var(--primary)]" />
          </div>
      </div>
      #ffffff
    </Wrapper> */
