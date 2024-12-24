import React from 'react'
import Icons from './Icons'
import { motion } from "framer-motion"
import { MdOutlineDownloading } from "react-icons/md";


const container = (time) => ({
    hidden:{y:-50,opacity:0},
    visible:{
        y:0,
        opacity:1,
        transition:{duration: 0.5 , delay: time}
    }
})

const Hero = () => {
    return (
      <>
      <div className='w-full min-h-screen flex items-center justify-center p-4 lg:p-8 sm:w-screen'>
        <div className='text-center'>

        <motion.p className='pt-2 font-medium lg:text-2xl text-gray-400 tracking-tight dark:font-normal'
        initial={{y:50,opacity:0}}
        animate={{y:0,opacity:1,transition:{duration:1,delay:1}}}
        >Developing Inventive Thoughts Into <span className='text-blue-400 dark:text-cyan-400'>Immersive User Journeys</span></motion.p>
        
          <motion.h1
            whileInView={{opacity:1,scale:1}}
            initial={{opacity:0,scale:0.85}}
            transition={{duration:0.5,delay:0.2}}
            style={{
              backgroundSize: '200% 200%',
              animation: 'gradient-animation 5s ease infinite'
            }}
            className='pb-2 text-5xl md:text-6xl lg:text-9xl font-semibold tracking-tight bg-gradient-to-r from-cyan-300 to-blue-800 bg-clip-text text-transparent dark:text-white'>
                Karthik Chitturi
          </motion.h1>

          <motion.span 
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className='pb-4 block text-lg md:text-xl lg:text-2xl font-semibold bg-gradient-to-br from-gray-800 to-gray-200 bg-clip-text text-transparent dark:text-cyan-400 dark:font-medium'>
            A Full Stack Developer & UI/UX Designer from INDIA
          </motion.span>
          
            <Icons/>
          <div className='z-20 mt-4 flex flex-wrap gap-2 justify-center text-md'>
            <motion.a className='flex items-center gap-1 bg-blue-500 px-4 py-3 rounded-xl text-white dark:bg-gray-50 dark:text-gray-700 dark:font-semibold hover:bg-blue-600'
            initial={{x:-50,opacity:0}}
            animate={{x:0,opacity:1,transition:{duration:1.5 , delay:2.5}}}
            href='https://drive.google.com/file/d/155KXunio6DeC1we8pYCpZJimft_HKToX/view?usp=sharing'
            target='new'>
                <span>Resume</span>
                <MdOutlineDownloading className='text-2xl'/>
            </motion.a>
            <motion.a className='py-3 px-4 border-blue-500 border rounded-xl text-blue-500 dark:border-gray-400 dark:text-gray-50 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800'
            initial={{x:50,opacity:0}}
            animate={{x:0,opacity:1,transition:{duration:1.5 , delay:2.5}}}
            href='#contact'><span>Contact Me</span></motion.a>
          </div>
        </div>
      </div>
        </>
    );
  };

export default Hero
