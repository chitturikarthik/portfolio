import React from 'react'
import { motion } from 'framer-motion'
import dark from "../assets/me.png"

const About = ({isDarkMode}) => {
  return (
    <div className='pb-4'>

        <h1 className='my-20 text-center text-5xl bg-gradient-to-br from-gray-900 to-gray-300 bg-clip-text text-transparent font-semibold dark:text-neutral-200'>About 
            <span className='dark:text-neutral-500'>&nbsp;Me</span>
        </h1>

        <div className='flex flex-wrap'>
            <motion.div 
            whileInView={{opacity:1,y:0}}
            initial={{y:100 , opacity:0}}
            transition={{duration:0.5}}
            className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                    <img src={dark} className='rounded-2xl'/>
                </div>
            </motion.div>
                <div className='w-full lg:w-1/2'>
                  <motion.div 
                  whileInView={{opacity:1,x:0}}
                  initial={{x:100 , opacity:0}}
                  transition={{duration:0.5,delay:0.5}}
                  className='flex justify-center lg:justify-start'>
                        <p className='my-2 max-w-xl py-6 font-regular text-gray-700 dark:text-neutral-400 text-justify tracking-tight'>
                        Hello! I’m Karthik Chitturi, a web developer currently pursuing a Bachelor's degree in Computer Science and Design at Sagi RamaKrishnam Raju Engineering College. I've interned as a Frontend Developer at PURPLELANE, where I translated design wireframes into interactive user interfaces, and as a Full Stack Developer at MCR WEB SOLUTIONS, creating user-centric websites.<br/><br/>
                        I have led projects like the SAANA Alumni website and a Web Analytics Portal, showcasing my ability to handle both frontend and backend development. My strengths include quick adaptation and continuous learning, strong problem-solving skills, and attention to detail.
                        <br/><br/>
                        I am proficient in HTML, CSS, JavaScript, PHP, Python, SQL, Bootstrap, Tailwin CSS and the MERN stack, with experience in tools like GitHub, Photoshop, Blender, Adobe XD and Figma. I’m passionate about building scalable web applications and continuously learning new technologies.
                        </p>
                    </motion.div>  
                </div>
        </div>

    </div>
  )
}

export default About