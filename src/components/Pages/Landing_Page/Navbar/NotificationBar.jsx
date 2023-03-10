import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Btn from "../Button/Btn";

const NotificationBar = () => {
  return (
    <div>
      <div className="body-font font-TomatoFont h-14 bg-[var(--primary)] py-5">
        <div className=" px-4 flex h-7 justify-between  max-[883px]:justify-center mt-0 mx-auto md:max-w-[1100px]">
          <p className="text-white text-sm  pt-0 pr-3 h-5 border-r-2  max-[883px]:hidden">
            Phone: +234 703 728 5562
          </p>
          <p className="text-white text-sm pt-0  px-3 h-5 text-center border-r-2  max-[883px]:hidden">
            Email: thechisomagafoundation@gmail.com
          </p>
          <div className="flex justify-end gap-5 pl-3 text-white">
            <FaTwitter className=" cursor-pointer  max-[883px]:hidden w-9 transform hover:-scale-x-100 transition duration-500 ease-in-out hover:text-[var(--blue)]" />
            <FaFacebook className="  cursor-pointer max-[883px]:hidden w-9 transform hover:-scale-x-100 transition duration-500 ease-in-out hover:text-[var(--blue)]" />
            <FaInstagram className="  cursor-pointer max-[883px]:hidden w-9 transform hover:-scale-x-100 transition duration-500 ease-in-out hover:text-[var(--blue)]" />
            <FaGoogle className=" cursor-pointer  max-[883px]:hidden w-9 transform hover:-scale-x-100 transition duration-500 ease-in-out hover:text-[var(--blue)]" />
          </div>
          <div className=" bg-gray-50 w-70 -translate-y-5 mt-0.4 w-fit h-fit">
            <Link to="/donate">
            <Btn type="button">Donate Now</Btn>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationBar;
