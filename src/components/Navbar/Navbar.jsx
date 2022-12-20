import {React, useState} from "react";
import { Link } from "react-scroll";
import Logo from "../../assets/chisomaga_transparent.png";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaGoogle,
} from "react-icons/fa";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
import Button from "../Button/Button";

const Navbar = () => {
   /* // making navbar sticky on scroll
   const [sticky, setSticky] = useState(false);
   const stickyScrollHandler = () => {
     setSticky(!sticky)
     
   }
*/
  // setting mobile nav
  const [nav, setNav] = useState(false);

  // closing menu on click 
  const navHandler = () => {
    setNav(!nav);
  }
  return (
    <div className="body-font font-TomatoFont">
      <div className="h-14 bg-[var(--primary)] py-5">
        <div className=" px-4 flex h-7 justify-between  max-[883px]:justify-center mt-0 mx-auto md:max-w-[1100px]">
          <p className="text-white text-sm  pt-0 pr-3 h-5 border-r-2  max-[883px]:hidden">
            Phone: +234 3 728 5562
          </p>
          <p className="text-white text-sm pt-0  px-3 h-5 text-center border-r-2  max-[883px]:hidden">
            Email: chisomaga-foundation@gmail.com.com
          </p>
          <div className="flex justify-end gap-5 pl-3 cursor-pointer text-white transition ease-in-out">
            <FaTwitter className="  max-[883px]:hidden w-9 transition ease-in-out  hover:-scale-x-100 hover:text-[var(--secondary)] "/>
            <FaFacebook className="  max-[883px]:hidden w-9 transition ease-in-out  hover:-scale-x-100 hover:text-[var(--secondary)]"/>
            <FaInstagram className="  max-[883px]:hidden w-9 transition ease-in-out  hover:-scale-x-100 hover:text-[var(--secondary)]" />
            <FaGoogle className="  max-[883px]:hidden w-9 transition ease-in-out  hover:-scale-x-100 hover:text-[var(--secondary)]"/>
          </div>
          <div className=" bg-gray-50 w-70 -translate-y-5 mt-0.4 w-fit h-fit">
          <Button type="button">Donate Now</Button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between h-24 max-w-[1100px] mx-auto sticky top-0">
         <div className="px-2">
        <img className="w-14 h-14 justify-start hidden md:block" src={Logo} alt="/" />
      </div>
      <ul className="hidden md:flex gap-7 text-sm font-medium">
        <li className="hover:border-b-2 hover:text-[var(--primary)]  hover:border-b-[var(--primary)] cursor-pointer py-6 transition color ease-in-out duration-500">
          <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
        </li>
        <li className="hover:border-b-2 hover:text-[var(--primary)]  hover:border-b-[var(--primary)] cursor-pointer py-6 transition color ease-in-out delay-150 duration-500">
          <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>About Us</Link>
        </li>
        <li className="hover:border-b-2 hover:text-[var(--primary)]  hover:border-b-[var(--primary)] cursor-pointer py-6 transition color ease-in-out delay-150 duration-500">
          <Link to="causes" spy={true} smooth={true} offset={-100} duration={500}>Causes</Link>
        </li>
        <li className="hover:border-b-2 hover:text-[var(--primary)]  hover:border-b-[var(--primary)] cursor-pointer py-6 transition color ease-in-out delay-150 duration-500">
          <Link to="gallery" spy={true} smooth={true} offset={-100} duration={500}>Gallery</Link>
        </li>
        <li className="hover:border-b-2 hover:text-[var(--primary)]  hover:border-b-[var(--primary)] cursor-pointer py-6 transition color ease-in-out delay-150 duration-500">
          <Link to="news" spy={true} smooth={true} offset={-100} duration={500}>News</Link>
        </li>
        <li className="hover:border-b-2 hover:text-[var(--primary)]  hover:border-b-[var(--primary)] cursor-pointer py-6 transition color ease-in-out delay-150 duration-500">
          <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>Contact</Link>
        </li>
        <li>
          <a></a>
        </li>
      </ul>
      <div onClick={navHandler} className="block md:hidden pr-3">
        {!nav ? <AiOutlineClose size={20} className=" cursor-pointer"/> : <AiOutlineMenu size={20} className=" cursor-pointer"/>}
      </div>
      <div className={!nav ? 'md:hidden fixed left-0 top-0 w-[60%] h-full border-r border-r-slate-200 bg-white ease-in-out duration-500' : ' md:hidden fixed left-[-100%]'}>
      <div>
        <img className="w-14 h-14 m-3" src={Logo} alt="/" />
      </div>
        <ul className=" pt-4 uppercase text-sm">
        <li className=" hover:text-[var(--primary)] cursor-pointer hover:border-b-4 hover:border-b-[var(--primary)] p-4 transition color ease-in-out duration-500">
          <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
        </li>
        <li className="hover:text-[var(--primary)] cursor-pointer hover:border-b-4 hover:border-b-[var(--primary)] p-4 transition color ease-in-out duration-500">
          <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>About Us</Link>
        </li>
        <li className="hover:text-[var(--primary)] cursor-pointer hover:border-b-4 hover:border-b-[var(--primary)]  p-4 transition color ease-in-out duration-500">
          <Link to="causes" spy={true} smooth={true} offset={-100} duration={500}>Causes</Link>
        </li>
        <li className="hover:text-[var(--primary)] cursor-pointer hover:border-b-4 hover:border-b-[var(--primary)]  p-4 transition color ease-in-out duration-500">
          <Link to="gallery" spy={true} smooth={true} offset={-100} duration={500}>Gallery</Link>
        </li>
        <li className="hover:text-[var(--primary)] cursor-pointer hover:border-b-4 hover:border-b-[var(--primary)] p-4 transition color ease-in-out duration-500">
          <Link to="news" spy={true} smooth={true} offset={-100} duration={500}>News</Link>
        </li>
        <li className="hover:text-[var(--primary)] cursor-pointer hover:border-b-4 hover:border-b-[var(--primary)] p-4 transition color ease-in-out duration-500">
          <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>Contact</Link>
        </li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
