import React from 'react';
import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';
function Experience() {
  return (
    <div className='border-b border-neutral-500 pb-4'>
      <motion.h1 
       whileInView={{ y: 0, opacity: 1 }}   
       initial={{ y: -100, opacity: 0 }}    
       transition={{ duration: 1 }}
      className='my-20 text-center text-4xl'>Experience</motion.h1>
      <div>
        {
          EXPERIENCES.map((experience, index) => (  
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
              <motion.div
                whileInView={{x:0,opacity:1}} 
                initial={{x:-100,opacity:0}}
                transition={{duration:0.5}} 
              className='w-full lg:w-1/4'>
                <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
              </motion.div>
              <motion.div
               whileInView={{x:0,opacity:1}} 
               initial={{x:100,opacity:0}}
               transition={{duration:0.5}} 
                className="w-full max-w-xl lg:w-3/4">
                <h6 className='mb-2 font-semibold'>
                  {experience.role} -{" "}
                  <span className='text-sm text-purple-400'>
                    {experience.company}
                  </span>
                </h6>
                <p className='mb-4 text-neutral-400'>{experience.description}</p>

                <div className='flex items-center'>
                  {experience.technologies.map((tech, index) => (
                    <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium glow-effect text-purple-800'>
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Experience;
