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
        <button className="px-4 py-2 bg-gradient-to-r from-[var(--cyan)] to-[var(--blue)] rounded-full font-bold text-sm hover:brightness-110 duration-200">
          Contact Us
        </button>
        <nav className="absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex gap-5 justify-center items-center text-sm">
            <li>
              <a href="#" className="hover:font-bold">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:font-bold">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:font-bold">
                Sign In
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;