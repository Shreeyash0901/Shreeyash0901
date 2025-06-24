import React from 'react'
import profilepic2 from '../assets/profilepic02.jpg'
import { motion } from "framer-motion"

const About_Text =`I am a passionate and dedicated full-stack developer with a strong foundation in both front-end and back-end technologies. After completing my degree in BSc Computer Science, I embarked on a full-stack Java development course at SevenMentor. Over the course of my learning, I have gained proficiency in front-end technologies such as HTML, CSS, JavaScript, React, Tailwind, Bootstrap, and Material-UI, allowing me to create visually appealing and responsive web applications.

On the back end, I have completed my training in core Java and advanced Java, and I'm now diving into Java frameworks like JDBC, servlets, Spring, Spring Boot, and Hibernate. I’m enthusiastic about continuously expanding my knowledge and applying these technologies to build scalable and efficient applications.

As part of my journey, I’ve also had the opportunity to undergo a 6-month internship at SevenMentor, which has provided me with valuable hands-on experience. I thrive in collaborative environments and love tackling new challenges. When I’m not coding, I enjoy exploring new technologies and contributing to projects that push my learning even further`
const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4  '>
        <h1 className='my-20 text-center text-2xl'>
            About 
            <span className='text-neutral-500 ml-3'>Me</span>
        </h1>
        <div
        className="flex justify-center items-center flex-col lg:flex-row gap-8 lg:gap-16 px-4 lg:px-20"> 
           
         
            <motion.div 
            whileInView={{x:0,opacity:1}} 
            initial={{x:100,opacity:0}}
            transition={{duration:0.5}} 
             className='w-full lg:w-1/2 text-center'>
                  <div className='flex flex-col justify-center lg:justify-center items-center mt-5'>
                    <p className='my-2 max-w-xl p-2 '>
                    I am a passionate and dedicated full-stack developer with a strong foundation in both front-end and back-end technologies. After completing my degree in BSc Computer Science, I embarked on a full-stack Java development course at SevenMentor. Over the course of my learning, I have gained proficiency in front-end technologies such as HTML, CSS, JavaScript, React, Tailwind, Bootstrap, and Material-UI, allowing me to create visually appealing and responsive web applications.
                    </p>
                    <p className='my-2 max-w-xl p-2 '>
                    On the back end, I have completed my training in core Java and advanced Java, and I'm now diving into Java frameworks like JDBC, servlets, Spring, Spring Boot, and Hibernate. I’m enthusiastic about continuously expanding my knowledge and applying these technologies to build scalable and efficient applications.
                    </p>
                    <p className='my-2 max-w-xl p-2 '>
                    As part of my journey, I’ve also had the opportunity to undergo a 6-month internship at SevenMentor, which has provided me with valuable hands-on experience. I thrive in collaborative environments and love tackling new challenges. When I’m not coding, I enjoy exploring new technologies and contributing to projects that push my learning even further
                    </p>
                  </div>
                </motion.div>
        </div>
    </div>
  )
}

export default About