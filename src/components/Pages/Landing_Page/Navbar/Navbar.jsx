import React from "react";
import { Link } from "react-scroll";
import Logo from "../../../../assets/chisomaga_transparent.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import NotificationBar from "./NotificationBar";

const Navbar = ({ nav, setNav }) => {
  //making navbar sticky on scroll
  /*const [sticky, setSticky] = useState(false);
  const stickyScrollHandler = () => {
    if (window.scrollY >= 200) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  window.addEventListener("scroll", stickyScrollHandler)*/
  // setting mobile nav
  //const [nav, setNav] = useState(false);

  // closing menu on click
  const navHandler = () => {
    setNav(!nav);
  };
  return (
    <div className="body-font font-TomatoFont overflow-auto transition duration-500 ease-in">
      <NotificationBar />
      <div className="bg-white transition-all delay-500 ease-in-out w-full overflow-hidden">
        <div className="md:max-w-[1100px] flex bg-white items-center justify-between h-24 mx-auto">
          <div className="px-2">
            <img
              className="w-14 h-14 justify-start md:block"
              src={Logo}
              alt="/"
            />
          </div>
          <ul
            id="unorderedList"
            className="hidden md:flex gap-7 text-sm text-[var(--blue)] font-medium"
          >
            <li className="focus:border-b-[var(--primary)] border-b-[var(--primary)] border-b-2 hover:border-b-2 hover:text-[var(--primary)]  hover:border-b-[var(--primary)] cursor-pointer py-6 transition color ease-in-out delay-150">
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
            <li className="focus:border-b-[var(--primary)]  border-b-white border-b-2 hover:border-b-2 hover:text-[var(--primary)]  hover:border-b-[var(--primary)] cursor-pointer py-6 transition color ease-in-out delay-150">
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
            <li className="focus:border-b-[var(--primary)]  border-b-white border-b-2 hover:border-b-2 hover:text-[var(--primary)]  hover:border-b-[var(--primary)] cursor-pointer py-6 transition color ease-in-out delay-150">
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
            <li className="focus:border-b-[var(--primary)]  border-b-white border-b-2 hover:border-b-2 hover:text-[var(--primary)]  hover:border-b-[var(--primary)] cursor-pointer py-6 transition color ease-in-out delay-150">
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
            <li className="focus:border-b-[var(--primary)] border-b-white border-b-2 hover:border-b-2 hover:text-[var(--primary)]  hover:border-b-[var(--primary)] cursor-pointer py-6 transition color ease-in-out delay-150">
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
            <li className="focus:border-b-[var(--primary)] border-b-white border-b-2 hover:border-b-2 hover:text-[var(--primary)]  hover:border-b-[var(--primary)] cursor-pointer py-6 transition color ease-in-out delay-150">
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
            <li className="focus:border-b-[var(--primary)] border-b-white border-b-2 hover:text-[var(--primary)]  hover:border-b-[var(--primary)] cursor-pointer py-6 transition color ease-in-out delay-150">
              <a href="/"> </a>
            </li>
          </ul>
          <div onClick={navHandler} className="block md:hidden pr-3">
            {!nav ? (
              <AiOutlineMenu size={20} className=" cursor-pointer" />
            ) : (
              <AiOutlineClose size={20} className=" cursor-pointer" />
            )}
          </div>
          <div
            className={
              nav
                ? "md:hidden z-50 fixed left-0 top-0 w-[60%] h-full border-r border-r-slate-200 bg-white ease-in-out duration-500"
                : "z-50 md:hidden fixed left-[-100%]"
            }
          >
            <div>
              <img className="w-14 h-14 m-3" src={Logo} alt="/" />
            </div>
            <ul className=" pt-4 uppercase text-sm">
              <li className="focus:border-b-[var(--primary)]  border-b-white border-b-2 hover:text-[var(--primary)] cursor-pointer hover:border-b-4 hover:border-b-[var(--primary)] p-4 transition color ease-in-out duration-500">
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
              <li className="focus:border-b-[var(--primary)] border-b-white border-b-2 hover:text-[var(--primary)] cursor-pointer hover:border-b-4 hover:border-b-[var(--primary)] p-4 transition color ease-in-out duration-500">
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
              <li className="focus:border-b-[var(--primary)] border-b-white border-b-2 hover:text-[var(--primary)] cursor-pointer hover:border-b-4 hover:border-b-[var(--primary)]  p-4 transition color ease-in-out duration-500">
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
              <li className="focus:border-b-[var(--primary)] border-b-white border-b-2 hover:text-[var(--primary)] cursor-pointer hover:border-b-4 hover:border-b-[var(--primary)]  p-4 transition color ease-in-out duration-500">
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
              <li className="focus:border-b-[var(--primary)] border-b-white border-b-2 hover:text-[var(--primary)] cursor-pointer hover:border-b-4 hover:border-b-[var(--primary)] p-4 transition color ease-in-out duration-500">
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
              <li className="!focus:border-b-[var(--primary)] border-b-white border-b-2 hover:text-[var(--primary)] cursor-pointer hover:border-b-4 hover:border-b-[var(--primary)] p-4 transition color ease-in-out duration-500">
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
      </div>
    </div>
  );
};

export default Navbar;
