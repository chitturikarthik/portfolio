import React from 'react'
import { EXPERIENCES } from '../constants'
import {motion} from "framer-motion"

const Experience = () => {

  return (
    <div className='pb-4'>
        <h1 className='my-20 text-center text-5xl bg-gradient-to-br from-gray-900 to-gray-300 bg-clip-text text-transparent font-semibold dark:text-neutral-200'>Work Experience</h1>
        <div>
            {
                EXPERIENCES.map(( experience , index)=> (
                    <div className='mb-8 flex flex-wrap lg:justify-center' key={index}>
                        <motion.div 
                        whileInView={{opacity:1,x:0}}
                        initial={{x:-100, opacity:0}}
                        transition={{duration:0.5,delay:0.2}}
                        className='w-full lg:w-1/4'>
                            <p className='mb-2 text-sm font-medium  text-neutral-500'>{experience.year}</p>
                        </motion.div>
                        <motion.div 
                        whileInView={{opacity:1,x:0}}
                        initial={{x:100, opacity:0}}
                        transition={{duration:0.5,delay:0.2}}
                        className='w-full max-w-xl lg:w-3/4'>
                             <h6 className='mb-2 font-semibold text-xl dark:text-neutral-200 text-blue-600'>
                                {experience.role} - <span className='uppercase text-sm
                                text-neutral-500 font-semibold dark:text-cyan-300 dark:font-regular'>{experience.company}</span>
                             </h6>
                             <p className='mb-4 text-neutral-600 dark:text-neutral-400 text-sm'>{experience.description}</p>
                             {experience.technologies.map((tech , index)=>(
                                <motion.span key={index} 
                                whileInView={{x:0,opacity:1}}
                                initial={{x:-100,opacity:0}}
                                transition={{duration:0.5,delay:1}}
                                className='mr-2 mt-4 rounded-md dark:bg-neutral-800 p-2 text-xs font-regular dark:text-neutral-400
                                bg-neutral-100 text-neutral-500'>{tech}</motion.span>
                             ))}
                        </motion.div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Experience