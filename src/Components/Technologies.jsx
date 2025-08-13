
import { FaReact } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import {  motion } from "framer-motion"
import { SiSpring } from "react-icons/si";
import { SiHibernate } from "react-icons/si";
import { TbHexagonLetterE } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


import Skills from './Skills';
const Technologies = () => {

  const iconvariants=(duration) =>(
    {
      initial:{y:-10},
      animate:{
        y:[10,-10],
        transition:{
          duration:duration,
          ease:"linear",
          repeat:Infinity,
          repeatType:"reverse",
        },
      },
    }
  );
  return (
    <div className='border-b border-neutral-900 pb-24'>
        <motion.h1
         whileInView={{ y: 0, opacity: 1 }}   
         initial={{ y: -100, opacity: 0 }}    
         transition={{ duration: 1 }}   
        className='my-20 text-center text-4xl '>Technologies</motion.h1>
        <motion.div
         whileInView={{ y: 0, opacity: 1 }}   
         initial={{ y: 100, opacity: 0 }}     
         transition={{ duration: 1 }}
        className=' flex flex-wrap items-center justify-center gap-4 '>
            <motion.div
            variants={iconvariants(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-900 p-4 glow-effect-icon flex flex-col items-center '>
            <FaReact className=' text-2xl  text-cyan-400 react m-3'/>
            <h1>React</h1>
            </motion.div>

            <motion.div
            variants={iconvariants(3)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-900 p-4 glow-effect-icon flex flex-col items-center'>
            <SiMysql className=' text-2xl  text-orange-400 m-3'/>
            <h1>MySQL</h1>
            
            </motion.div>

            <motion.div 
            variants={iconvariants(6)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-900 p-4 glow-effect-icon flex flex-col items-center'>
            <SiSpring className=' text-2xl  text-green-400  m-3 '/>
            <h1>Spring</h1>
            </motion.div>

            <motion.div 
            variants={iconvariants(6)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-900 p-4 glow-effect-icon flex flex-col items-center  '>
            <SiTailwindcss className=' text-2xl  text-cyan-400 m-3' />
            <h1>TailwindCSS</h1>
            </motion.div>

            <motion.div 
            variants={iconvariants(6)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-900 p-4 glow-effect-icon flex flex-col items-center  '>
            <SiHibernate className=' text-2xl  text-cyan-400 m-3'/>
            <h1>Hidernate</h1>
            </motion.div>            

            <motion.div
            variants={iconvariants(4)}
            initial="initial"
            animate="animate"
             className='rounded-2xl border-4 border-neutral-900 p-4 glow-effect-icon flex flex-col items-center '>
            <FaJava className=' text-7xl  text-orange-400 m-3'/>
            <h1>Java</h1>
            </motion.div>

            <motion.div
            variants={iconvariants(3)}
            initial="initial"
            animate="animate"
             className='rounded-2xl border-4 border-neutral-900 p-4 glow-effect-icon flex flex-col items-center   '>
            <FaNode className=' text-7xl  text-green-400 m-3 '/>
            <h1>Node.js</h1>
            </motion.div>

            <motion.div
            variants={iconvariants(3)}
            initial="initial"
            animate="animate"
             className='rounded-2xl border-4 border-neutral-900 p-4 glow-effect-icon flex flex-col items-center   '>
            <TbHexagonLetterE className=' text-7xl  text-green-400 m-3 '/>
            <h1>Express.js</h1>
            </motion.div>

            <motion.div
            variants={iconvariants(3)}
            initial="initial"
            animate="animate"
             className='rounded-2xl border-4 border-neutral-900 p-4 glow-effect-icon flex flex-col items-center   '>
            <SiMongodb className=' text-7xl  text-blue-400 m-3 '/>
            <h1>mongoDB</h1>
            </motion.div>

            <motion.div
            variants={iconvariants(3)}
            initial="initial"
            animate="animate"
             className='rounded-2xl border-4 border-neutral-900 p-4 glow-effect-icon flex flex-col items-center   '>
            <SiMongoose  className=' text-7xl  text-orange-400 m-3 '/>
            <h1>Mongoose</h1>
            </motion.div>

            <motion.div
            variants={iconvariants(3)}
            initial="initial"
            animate="animate"
             className='rounded-2xl border-4 border-neutral-900 p-4 glow-effect-icon flex flex-col items-center   '>
            <SiSpringboot  className=' text-7xl  text-green-400 m-3 '/>
            <h1>SpringBoot</h1>
            </motion.div>

            <motion.div
            variants={iconvariants(3)}
            initial="initial"
            animate="animate"
             className='rounded-2xl border-4 border-neutral-900 p-4 glow-effect-icon flex flex-col items-center   '>
            <FaGitAlt  className=' text-7xl  text-blue-400 m-3 '/>
            <h1>GIT</h1>
            </motion.div>

            <motion.div
            variants={iconvariants(3)}
            initial="initial"
            animate="animate"
             className='rounded-2xl border-4 border-neutral-900 p-4 glow-effect-icon flex flex-col items-center   '>
            <FaGithub  className=' text-7xl  text-blue-400 m-3 '/>
            <h1>Github</h1>
            </motion.div>



         </motion.div>
         
         <Skills/>
    </div>
    
  )
}

export default Technologies