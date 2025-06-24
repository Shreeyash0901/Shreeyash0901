import React from 'react';
import logo from "../assets/Shree.png";
import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      {/* Logo Section */}
      <div className='flex items-center flex-shrink-0 '>
        <img src={logo} alt="Logo" className="mx-2 w-17 " /> 
      </div>

      {/* Social Icons */}
      <div className='m-8 flex items-center justify-center gap-4 text-2xl '>
        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className='glow-effect-nav' />
        </a>
        <a href="https://github.com/Shreeyash0901" target="_blank" rel="noopener noreferrer">
          <FaGithub className='glow-effect-nav' />
        </a>
        <a href="https://twitter.com/your-twitter-username" target="_blank" rel="noopener noreferrer">
          <FaTwitterSquare className='glow-effect-nav' />
        </a>
        <a href="https://www.instagram.com/x__shreeyash__x/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className='glow-effect-nav' />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
