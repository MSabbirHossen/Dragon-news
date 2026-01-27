import React from "react";
import { format } from "date-fns";
import logo from "../../assets/logo.png";
import Marquee from "react-fast-marquee";
import { FcNews } from "react-icons/fc";
import Navbar from "../Navbar/Navbar";
const Header = () => {
  return (
    <div className="my-4">
      <div className="flex justify-center flex-col items-center">
        <img src={logo} className="w-[400px]" alt="Dragon News Logo" />
        <p className="text-accent">Journalism Without Fear or Favour</p>
        {/* <p>Sunday, November 27, 2025</p> */}
        <p className="font-semibold">
          {format(new Date(), "EEEE, ")}
          <span className="text-accent">
            {format(new Date(), " MMMM dd, yyyy")}
          </span>
        </p>

        <div className="flex justify-between gap-5 my-4 w-full">
          <p className="text-base-200 bg-secondary px-3 py-2">Latest</p>
          <Marquee pauseOnHover={true} speed={50}>
            <FcNews className="ml-5" />
            <p className="font-bold ml-1.5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              modi!
            </p>
            <FcNews className="ml-5" />
            <p className="font-bold ml-1.5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              modi!
            </p>
            <FcNews className="ml-5" />
            <p className="font-bold ml-1.5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              modi!
            </p>
          </Marquee>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
