//import React from "react";
import { navLinks } from "../constants";
import {logo} from "../assets";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center">
    <img src={logo} alt="logo undefeated" className="w-[132px]"/>
      <ul className="hidden md:flex justify-end items-center flex-1 ">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-orange-500 font-semibold`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
