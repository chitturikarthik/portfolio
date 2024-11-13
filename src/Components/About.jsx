import React from 'react'
import { motion } from 'framer-motion'
import dark from "../assets/me2.png"

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
                        <p className='my-2 max-w-xl text-md py-6 font-regular text-gray-700 dark:text-neutral-400 text-justify tracking-tight'>
                        This is  Karthik Chitturi, currently studying Computer Science and Design at SRKREC, where I've worked hard to maintain a CGPA of 8.12.
                        <br/>
                        My journey got exciting when I joined PURPLELANE as a Frontend Developer and UI Designer Intern. There, I worked with a great team to turn design ideas into interactive user interfaces. Before that, at MCR WEB SOLUTIONS, I helped create websites for clients, including a special alumni portal and a conference site for the University of Hyderabad.
                        <br/><br/>
                        One of my proudest projects is SAANA, a platform for over 200 NRI graduates from the 1990s. Inspired by my mentor, Dr. Suresh, and supported by a fantastic team, we integrated PayPal for payments, managed memberships, and built a dynamic dashboard. My skills in HTML, CSS, JavaScript, and PHP were key, but it was our teamwork that made SAANA possible.
                        Right now, I'm working on a web analytics portal for the University of Hyderabad, using PHP and Geolocation API for real-time visitor tracking. My technical skills include the MERN Stack, Python, SQL, MySQL, GitHub, Figma, and Blender, and I have certifications in ReactJs and other web technologies. I've also joined many hackathons to keep improving my skills.
                        <br/><br/>
                        What I love most is working with others to create software that makes a difference. Through these projects, I've learned that teamwork and a shared vision can achieve amazing things. Thank you for listening, and I'm excited about what the future holds.
                        </p>
                    </motion.div>  
                </div>
        </div>

    </div>
  )
}

export default About
