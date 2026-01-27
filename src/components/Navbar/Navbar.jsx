import React from "react";
import { NavLink } from "react-router";
import userPic from "../../assets/user.png";

const Navbar = () => {
  const navlinks = [
    <NavLink to="/">Home</NavLink>,
    <NavLink to="/about">About</NavLink>,
    <NavLink to="/career">Career</NavLink>,
  ];

  const activeStyle = {
    fontWeight: "bold",
    color: "#FF0000",
  };
  return (
    <>
      <nav className="py-4 text-accent flex justify-between items-center border-t border-b m-3">
        <div className=""></div>
        <div className="flex gap-6 mr-6 text-lg font-semibold">
          {navlinks.map((link, idx) => (
            <li className="list md:list-none" key={idx}>
              {link}
            </li>
          ))}
        </div>
        <div className="flex items-center">
          <img src={userPic} alt="User" className="w-8 h-8 rounded-full mr-4" />
          <a className="btn btn-primary">Login</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
