import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { SiMongodb ,SiMysql ,SiBlender ,SiAdobephotoshop , SiAdobexd ,SiExpress} from 'react-icons/si'
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from 'react-icons/fa6'
import { BiLogoPhp } from "react-icons/bi";
import { FaHtml5 ,FaBootstrap , FaPython ,FaGitAlt} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FiFigma } from "react-icons/fi";

import {motion} from "framer-motion"

const Technologies = () => {

    const IconVars = (duration) => ({
        initial : {y:-10},
        animate : {
            y:[10,-10],
            transition: {
                duration: duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse"
            }
        }
    })
  return (
    <div className='pb-24'>
        <h1 className='p-1 my-20 text-center text-5xl bg-gradient-to-br from-gray-900 to-gray-300 bg-clip-text text-transparent font-semibold dark:text-neutral-200'>Skills</h1>

        <motion.p 
        whileInView={{opacity:1 , y:0}}
        initial={{opacity:0,y:-50}}
        transition={{duration:1.5 , delay:0.2}}className='text-center mt-8 font-semibold text-xl uppercase text-blue-600'>Development</motion.p>

        <motion.div 
        whileInView={{opacity:1 , y:0}}
        initial={{opacity:0,y:-50}}
        transition={{duration:1.5 , delay:0.2}}
        className='mt-4 flex flex-wrap items-center justify-center gap-4'>


            <div 
            className='rounded-2xl flex flex-col items-center bg-white dark:bg-gray-900 border-2 border-blue-200 dark:border-cyan-200 p-4'>
                <FaHtml5 className='text-6xl text-orange-500'/>
                <p className='text-center pt-1 text-sm text-gray-700 dark:text-neutral-300'>HTML</p>
            </div>

            <div 
            className='rounded-2xl flex flex-col items-center bg-white dark:bg-gray-900 border-2 border-blue-200 dark:border-cyan-200 p-4'>
                <IoLogoJavascript className='text-6xl text-yellow-400'/>
                <p className='text-center pt-1 text-sm text-gray-700 dark:text-neutral-300'>JavaScript</p>
            </div>

            <div 
            className='rounded-2xl flex flex-col items-center bg-white dark:bg-gray-900 border-2 border-blue-200 dark:border-cyan-200 p-4'>
                <FaBootstrap className='text-6xl text-purple-600'/>
                <p className='text-center pt-1 text-sm text-gray-700 dark:text-neutral-300'>Bootstrap</p>
            </div>

            <div 
            className='rounded-2xl flex flex-col items-center bg-white dark:bg-gray-900 border-2 border-blue-200 dark:border-cyan-200 p-4'>
                <RiTailwindCssFill className='text-6xl text-cyan-500'/>
                <p className='text-center pt-1 text-sm text-gray-700 dark:text-neutral-300'>Tailwind</p>
            </div>

            <div 
            className='rounded-2xl flex flex-col items-center bg-white dark:bg-gray-900 border-2 border-blue-200 dark:border-cyan-200 p-4'>
                <BiLogoPhp className='text-6xl text-violet-600'/>
                <p className='text-center pt-1 text-sm text-gray-700 dark:text-neutral-300'>PHP</p>
            </div>

            <div 
            className='rounded-2xl flex flex-col items-center bg-white dark:bg-gray-900 border-2 border-blue-200 dark:border-cyan-200 p-4'>
                <SiMysql className='text-6xl text-teal-600'/>
                <p className='text-center pt-1 text-sm text-gray-700 dark:text-neutral-300'>MySQL</p>
            </div>

            
        </motion.div>

        <motion.div 
        whileInView={{opacity:1 , y:0}}
        initial={{opacity:0,y:-50}}
        transition={{duration:1.5 , delay:0.2}}
        className='mt-4 flex flex-wrap items-center justify-center gap-4'>

            <div 
            className='rounded-2xl flex flex-col items-center bg-white dark:bg-gray-900 border-2 border-blue-200 dark:border-cyan-200 p-4'>
                <SiMongodb className='text-6xl text-green-500'/>
                <p className='text-center pt-1 text-sm text-gray-700 dark:text-neutral-300'>MongoDB</p>
            </div>

            <div 
            className='rounded-2xl flex flex-col items-center bg-white dark:bg-gray-900 border-2 border-blue-200 dark:border-cyan-200 p-4'>
                <SiExpress className='text-6xl text-gray-800 dark:text-gray-50'/>
                <p className='text-center pt-1 text-sm text-gray-700 dark:text-neutral-300'>ExpressJS</p>
            </div>

            <div 
            className='rounded-2xl flex flex-col items-center bg-white dark:bg-gray-900 border-2 border-blue-200 dark:border-cyan-200 p-4'>
                <RiReactjsLine className='text-6xl text-cyan-400'/>
                <p className='text-center pt-1 text-sm text-gray-700 dark:text-neutral-300'>ReactJS</p>
            </div>

            <div 
            className='rounded-2xl flex flex-col items-center bg-white dark:bg-gray-900 border-2 border-blue-200 dark:border-cyan-200 p-4'>
                <FaNodeJs className='text-6xl text-green-500'/>
                <p className='text-center pt-1 text-sm text-gray-700 dark:text-neutral-300'>NodeJS</p>
            </div>

            <div 
            className='rounded-2xl flex flex-col items-center bg-white dark:bg-gray-900 border-2 border-blue-200 dark:border-cyan-200 p-4'>
                <FaPython className='text-6xl text-yellow-500'/>
                <p className='text-center pt-1 text-sm text-gray-700 dark:text-neutral-300'>Python</p>
            </div>

            <div 
            className='rounded-2xl flex flex-col items-center bg-white dark:bg-gray-900 border-2 border-blue-200 dark:border-cyan-200 p-4'>
                <FaGitAlt className='text-6xl text-red-600'/>
                <p className='text-center pt-1 text-sm text-gray-700 dark:text-neutral-300'>Git</p>
            </div>

        </motion.div>

        <motion.p 
        whileInView={{opacity:1 , y:0}}
        initial={{opacity:0,y:-50}}
        transition={{duration:1.5 , delay:0.2}}className='text-center mt-8 font-semibold text-xl uppercase text-blue-600'>Designing</motion.p>

        <motion.div 
        whileInView={{opacity:1 , y:0}}
        initial={{opacity:0,y:-50}}
        transition={{duration:1.5 , delay:0.2}}
        className='mt-4 flex flex-wrap items-center justify-center gap-4'>
            
            <div 
            className='rounded-2xl flex flex-col items-center bg-white dark:bg-gray-900 border-2 border-blue-200 dark:border-cyan-200 p-4'>
                <SiBlender className='text-6xl text-orange-600'/>
                <p className='text-center pt-1 text-sm text-gray-700 dark:text-neutral-300'>Blender</p>
            </div>

            <div 
            className='rounded-2xl flex flex-col items-center bg-white dark:bg-gray-900 border-2 border-blue-200 dark:border-cyan-200 p-4'>
                <FiFigma className='text-6xl dark:text-gray-50 text-blue-700'/>
                <p className='text-center pt-1 text-sm text-gray-700 dark:text-neutral-300'>Figma</p>
            </div>

            <div 
            className='rounded-2xl flex flex-col items-center bg-white dark:bg-gray-900 border-2 border-blue-200 dark:border-cyan-200 p-4'>
                <SiAdobephotoshop className='text-6xl text-blue-600'/>
                <p className='text-center pt-1 text-sm text-gray-700 dark:text-neutral-300'>Photoshop</p>
            </div>

            <div 
            className='rounded-2xl flex flex-col items-center bg-white dark:bg-gray-900 border-2 border-blue-200 dark:border-cyan-200 p-4'>
                <SiAdobexd className='text-6xl text-red-600'/>
                <p className='text-center pt-1 text-sm text-gray-700 dark:text-neutral-300'>Adobe XD</p>
            </div>
        </motion.div>

    </div>
  )
}

export default Technologies