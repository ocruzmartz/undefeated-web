//import React from "react";
import { navLinks } from "../constants";
import { logo } from "../assets";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between">
      <img src={logo} alt="logo undefeated" className="w-[75px] md:w-[132px]" />
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
      <div className="flex md:hidden">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-orange-500" // Cambia el color aquí
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
