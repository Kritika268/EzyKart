import React from "react";
import { logo } from "../assets/admin_assets/logo.png";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <img src={logo} className="w-36" alt="Logo" />

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-1/2 border-none h-[2px] bg-gray-700" />
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
