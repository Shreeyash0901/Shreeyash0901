import React from 'react';
import { HERO_CONTENT } from '../constants';
import profilepic from '../assets/profilepic.jpg'
const Hero = () => {
    
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2"> {/* Removed the extra '<' here */}
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-1 lg:text-6xl">
              Shreeyash Helchal
            </h1>
         <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              Full Stack Developer
            </span>
            <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>{HERO_CONTENT}</p> {/* Make sure HERO_CONTENT is properly defined */}
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-4'>
        <div className='flex justify-center'>

        <img src={profilepic} alt="" className='rounded-3xl w-80 ' />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
