import React from 'react';
import logo from "../assets/Shree.png";
import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='mb-20  flex items-center justify-between py-6'>
      {/* Logo Section */}
      <div className='flex items-center flex-shrink-0 '>
        <img src={logo} alt="Logo" className="mx-2 w-17" /> {/* Adjust the height as needed */}
      </div>

      {/* Social Icons */}
      <div className='m-8 flex items-center justify-center gap-4 text-2xl '>
        <FaLinkedin />
        <FaGithub />
        <FaTwitterSquare />
        <FaInstagram />
      </div>
    </nav>
  );
}

export default Navbar;
