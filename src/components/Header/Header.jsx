import React from "react";
import logo from '../../assets/logo.png';
const Header = () => {
  return (
    <div className="flex justify-center flex-col items-center">
        <img src={logo} className="w-[400px]" alt="Dragon News Logo" />
        <p className="text-accent">Journalism Without Fear or Favour</p>
        <p>Sunday, November 27, 2025</p>
    </div>
  );
};

export default Header;
