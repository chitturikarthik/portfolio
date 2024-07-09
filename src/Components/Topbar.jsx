import React, { useEffect, useState } from 'react';
import { FaSun } from 'react-icons/fa';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { FaHome, FaUser, FaLaptopCode, FaBriefcase, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const Topbar = ({ toggleTheme, isDarkMode }) => {
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`z-50 m-8 fixed flex-wrap top-0 left-0 right-0 transition-all duration-500 ${
        show ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      } flex justify-center`}
    >
      <div className=" rounded-xl sm:m-0 flex flex-wrap items-center justify-center gap-4 text-sm tracking-wider bg-white dark:bg-gray-900 text-gray-400 py-4 px-8 shadow-lg  dark:text-gray-500 w-full sm:w-auto">
        <div className="hidden sm:flex gap-4">
          <a href="#home" className="dark:hover:text-gray-50 hover:text-blue-500 font-medium">Home</a>
          <a href="#about" className="dark:hover:text-gray-50 hover:text-blue-500 font-medium">About</a>
          <a href="#experience" className="dark:hover:text-gray-50 hover:text-blue-500 font-medium">Experience</a>
          <a href="#technologies" className="dark:hover:text-gray-50 hover:text-blue-500 font-medium">Skills</a>
          <a href="#projects" className="dark:hover:text-gray-50 hover:text-blue-500 font-medium">Projects</a>
          <a href="#contact" className="dark:hover:text-gray-50 hover:text-blue-500 font-medium">Contact</a>
        </div>

        <div className="grid grid-cols-3 gap-4 text-2xl sm:hidden w-full">
          <a href="#home" className="dark:hover:text-gray-50 hover:text-blue-500 font-regular flex flex-col items-center">
            <FaHome />
            <p className='text-sm mt-1 pb-1'>Home</p>
          </a>
          <a href="#about" className="dark:hover:text-gray-50 hover:text-blue-500 font-regular flex flex-col items-center">
            <FaUser />
            <p className='text-sm mt-1 pb-1'>About</p>
          </a>
          <a href="#experience" className="dark:hover:text-gray-50 hover:text-blue-500 font-regular flex flex-col items-center">
            <FaBriefcase />
            <p className='text-sm mt-1 pb-1'>Experience</p>
          </a>
          <a href="#technologies" className="dark:hover:text-gray-50 hover:text-blue-500 font-regular flex flex-col items-center">
            <FaLaptopCode />
            <p className='text-sm mt-1 pb-1'>Skills</p>
          </a>
          
          <a href="#projects" className="dark:hover:text-gray-50 hover:text-blue-500 font-regular flex flex-col items-center">
            <FaProjectDiagram />
            <p className='text-sm mt-1 pb-1'>Projects</p>
          </a>
          <a href="#contact" className="dark:hover:text-gray-50 hover:text-blue-500 font-regular flex flex-col items-center">
            <FaEnvelope />
            <p className='text-sm mt-1 pb-1'>Contact</p>
          </a>
        </div>
        <button onClick={toggleTheme} className='ml-4'>
          {isDarkMode ? <FaSun className='text-yellow-400 text-xl' /> : <BsFillMoonStarsFill className='text-purple-900 text-xl'/>}
        </button>
      </div>
    </div>
  );
};

export default Topbar;
