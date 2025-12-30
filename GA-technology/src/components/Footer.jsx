import React from "react";
import { FaFacebookF, FaBehance, FaInstagram, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        {/* Logo */}
        <div className="flex justify-center items-center gap-2 mb-6">
          <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
           GA-Technology
          </span>
        </div>

        {/* Navigation */}
        <ul className="flex justify-center gap-6 text-sm mb-6">
          <NavLink to='/'><li className="text-gray-800 hover:text-white cursor-pointer font-semibold">Home</li></NavLink>
          <NavLink to='/about'><li className="text-gray-800 hover:text-white cursor-pointer font-semibold">About</li></NavLink>
          <NavLink to='/project'><li className=" text-gray-800 hover:text-white cursor-pointer font-semibold">Project</li></NavLink>   
        </ul>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-8">
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-yellow-400 text-gray-800 cursor-pointer">
            <FaFacebookF size={14} />
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-yellow-400 text-gray-800 cursor-pointer">
            <FaBehance size={14} />
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-yellow-400 text-gray-800 cursor-pointer">
            <FaInstagram size={14} />
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-yellow-400 text-gray-800 cursor-pointer">
            <FaTwitter size={14} />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 pt-4 text-xs text-gray-800 font-semibold">
          Copyright © GA-Technology (pvt) Ltd
        </div>
      </div>
    </footer>
  );
};

export default Footer;
