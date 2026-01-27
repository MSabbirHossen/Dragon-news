import React from "react";
import { format } from "date-fns";
import logo from "../../assets/logo.png";
const Header = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <img src={logo} className="w-[400px]" alt="Dragon News Logo" />
      <p className="text-accent">Journalism Without Fear or Favour</p>
      {/* <p>Sunday, November 27, 2025</p> */}
      <p>{format(new Date(), "EEEE, ")}
        <span className="text-accent">
      {format(new Date(), " MMMM dd, yyyy")}</span>
      </p>
    </div>
  );
};

export default Header;
