import React from "react";
import logo from "../assets/images/logo.svg";

const Navbar = () => {
  return (
    <header>
      <div className="flex items-center justify-between p-6 max-w-[1440px] mx-auto">
        <div className="max-w-[90px] md:max-w-[140px]">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <nav className="absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex gap-5 justify-center items-center text-sm">
            <li className="w-[60px] text-center">
              <a href="#" className="hover:font-bold">
                Features
              </a>
            </li>
            <li className="w-[50px] text-center">
              <a href="#" className="hover:font-bold">
                Teams
              </a>
            </li>
            <li className="w-[50px] text-center">
              <a href="#" className="hover:font-bold">
                Sign In
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <button className="px-6 py-2 bg-gradient-to-r from-[var(--cyan)] to-[var(--blue)] rounded-full font-bold text-sm hover:brightness-110 duration-200">
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;