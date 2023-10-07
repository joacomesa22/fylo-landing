import React from "react";
import logo from "../assets/images/logo.svg";

const Navbar = () => {
  return (
    <header>
      <div className="flex items-center justify-between p-6 max-w-[1440px] my-0 mx-auto">
        <div className="max-w-[90px] md:max-w-[140px]">
          <img src={logo} alt="logo" />
        </div>
        <nav>
          <ul className="flex gap-5 md:gap-7 justify-center items-center text-sm">
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Teams</a>
            </li>
            <li>
              <a href="#">Sign In</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
