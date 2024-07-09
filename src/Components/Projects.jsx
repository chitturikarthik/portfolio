import React from 'react'
import {PROJECTS} from '../constants'
import {motion} from "framer-motion"
import { GoProjectSymlink } from "react-icons/go";
import { LuFolderSymlink } from "react-icons/lu";


const Projects = () => {
  return (
    <div className='pb-4'>
        <h1 className='my-20 text-center text-5xl bg-gradient-to-br from-gray-900 to-gray-300 bg-clip-text text-transparent font-semibold dark:text-neutral-200 py-2'>Projects</h1>
        <div>
            {PROJECTS.map((project , index)=>(
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div 
                    whileInView={{opacity:1,x:0}}
                    initial={{x:-100, opacity:0}}
                    transition={{duration:0.5,delay:0.2}}className='w-full lg:w-1/4'>
                        <img src={project.image} className='mb-6 rounded-md lg:w-3/4' />
                    </motion.div>
                    <motion.div 
                        whileInView={{opacity:1,x:0}}
                        initial={{x:100, opacity:0}}
                        transition={{duration:0.5,delay:0.2}}className='w-full max-w-xl lg:w-3/4'
                    >
                        <h6 className='mb-2 font-semibold text-lg text-blue-500 dark:text-neutral-200'>{project.title}</h6>
                        <p className='mb-4 text-neutral-600 dark:text-neutral-400 text-sm'>{project.description}</p>
                        <div className='flex flex-wrap gap-2 text-xs mb-8 dark:font-semibold'>
                            <a className='flex items-center justify-center py-2 px-4 gap-2 bg-blue-600 text-white rounded-full dark:bg-neutral-50 dark:text-gray-900 ' target='new' href={project.live}>
                                <span>Live Link</span>
                                <GoProjectSymlink className='text-xl'/>
                            </a>
                            <a className='flex items-center justify-center border text-blue-600 rounded-full py-2 px-4 gap-2 dark:text-neutral-50 dark:hover:bg-gray-800' target='new' href={project.code}>
                                <span>Code Base</span>
                                <LuFolderSymlink className='text-xl'/>
                            </a>
                        </div>
                        {
                            project.technologies.map((tech,index)=>(
                                <span key={index} className='mr-2 rounded dark:bg-neutral-800 text-xs p-2 dark:text-neutral-400
                                text-neutral-600 bg-neutral-200'>{tech}</span>
                            ))
                        }
                    </motion.div>
                </div>


            ))}
        </div>
    </div>
  )
}

export default Projects