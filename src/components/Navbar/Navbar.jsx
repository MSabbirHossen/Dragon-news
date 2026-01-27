import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const navlinks = [
    <NavLink to="/">Home</NavLink>,
    <NavLink to="/about">About</NavLink>,
    <NavLink to="/career">Career</NavLink>,
  ];
  return (
    <nav>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <div
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navlinks.map((link, idx) => (
                <li key={idx}>{link}</li>
              ))}
            </div>
          </div>
          <a className="btn btn-ghost text-xl">Dragon News</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="menu menu-horizontal px-1">
            {navlinks.map((link, idx) => (
              <li key={idx}>{link}</li>
            ))}
          </div>
        </div>
        <div className="navbar-end">
          <a className="btn">Login</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
