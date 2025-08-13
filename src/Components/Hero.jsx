import React from 'react';
import { HERO_CONTENT } from '../constants';
import profilepic from '../assets/profilepic.jpg'
import { motion } from "framer-motion"
const Hero = () => {
    
    const container=(delay)=>(
      {
        hidden:{x: -100,opacity:0},
        visible:{
          x:0,
          opacity:1,
          transition:{duration:0.5,delay:delay},
        },
      }
    );
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex justify-center items-center flex-col lg:flex-row gap-8 lg:gap-16 px-4 lg:px-20">
        <div className="w-full lg:w-1/2"> 
          <div className="flex flex-col items-center    lg:items-center">
            <motion.h1 variants={container(0)}
                        initial="hidden"
                        animate="visible" 
                        className="pb-16 text-6xl font-bold tracking-tight lg:mt-1 lg:text-6xl text-center">
              Shreeyash Helchal
            </motion.h1>
         <motion.span variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                         className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent ">
              Full Stack Developer
            </motion.span>
            <motion.p 
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className='my-2 max-w-xl py-6 font-light tracking-tighter text-center'>{HERO_CONTENT}</motion.p> 

            <motion.a
  variants={container(0.5)}
  initial="hidden"
  animate="visible"
  href="/public/Shreeyash Ravindra Helchal-1.pdf"
  download
  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-2xl shadow-md transition duration-300"
>
  <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent">
    Download Resume
  </span>
</motion.a>

          </div>
          
        </div>
        
      </div>
    </div>
  );
}

export default Hero;
