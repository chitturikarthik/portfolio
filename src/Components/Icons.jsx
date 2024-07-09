import React from 'react'
import { motion } from 'framer-motion';
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn, FaInstagram ,FaBehance } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Icons = () => {
  const container = (time) => ({
    hidden:{x:-30,opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration: 1.25 , delay: time}
    }
})

const container2 = (time) => ({
  hidden:{x:30,opacity:0},
  visible:{
      x:0,
      opacity:1,
      transition:{duration: 1.25 , delay: time}
  }
})

  return (
    <div className='z-10 p-4 flex flex-wrap justify-center gap-4'>

        <motion.a 
        href='https://www.github.com/chitturikarthik' 
        target='new'
        variants={container(1.25)}
        initial="hidden"
        animate="visible"
        className='p-3 bg-neutral-200 rounded-full text-neutral-400 hover:bg-gray-800 hover:text-gray-50 transition-all duration-300 ease-in-out '>
        <FiGithub 
        className='text-xl'/></motion.a>

        <motion.a 
        href='https://www.linkedin.com/in/karthik-chitturi-0904kc2203/' target='new'
        variants={container(1.25)}
        initial="hidden"
        animate="visible"
        className='p-3 bg-neutral-200 rounded-full text-neutral-400 hover:bg-blue-800 hover:text-gray-50 transition-all duration-300 ease-in-out '>
        <FaLinkedinIn className='text-xl'/>
        </motion.a>

        <motion.a 
        href='https://leetcode.com/u/karthik_csd/' target='new' 
        initial={{y:20,opacity:0}}
        animate={{y:0,opacity:1 ,transition:{duration:1.25 ,delay:1.25 }}}
        className='p-3 bg-neutral-200 rounded-full text-neutral-400 hover:bg-yellow-400 hover:text-gray-700 transition-all duration-300 ease-in-out '>
        <SiLeetcode className='text-xl'/>
        </motion.a>

        <motion.a 
        href='https://www.behance.net/karthikchitturi' target='new' variants={container2(1.25)}
        initial="hidden"
        animate="visible"
        className='p-3 bg-neutral-200 rounded-full text-neutral-400 hover:bg-blue-600 hover:text-gray-50 transition-all duration-300 ease-in-out '>
        <FaBehance className='text-xl' />
        </motion.a>

        <motion.a 
        href='https://www.behance.net/karthikchitturi' target='new' variants={container2(1.25)}
        initial="hidden"
        animate="visible"
        className='p-3 bg-neutral-200 rounded-full text-neutral-400 hover:bg-pink-500 hover:text-gray-50 transition-all duration-300 ease-in-out '>
        <FaInstagram className='text-xl'/>
        </motion.a>
    </div>
    
  )
}

export default Icons  