import React,{useState , useEffect} from 'react'
import './App.css'
import Hero from './Components/Hero'
import About from './Components/About'
import Technologies from './Components/Technologies'
import Experience from './Components/Experience'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Topbar from './Components/Topbar'

const App = () => {

  const [isDarkMode , setIsDarkMode] = useState(true)

  useEffect(()=>{
    if(isDarkMode){
      document.documentElement.classList.add('dark')
    }
    else{
      document.documentElement.classList.remove('dark')
    }
  },[isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }
  return (
      <div className={`${isDarkMode ? 'dark' : 'light'} overflow-x-hidden text-neutral-200 antialiased selection:bg-blue-300 selection:text-blue-700`}>
        <Topbar toggleTheme={toggleTheme} isDarkMode={isDarkMode}/>
        <div className='fixed top-0 -z-10 h-full w-full'>
          {
            isDarkMode ? (
              <div class="relative h-full w-full bg-gray-950"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f_1px,transparent_1px)] bg-[size:64px_44px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div></div>

            ) : (

              <div class="relative h-full w-full bg-white"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_44px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div></div>
            )
          } 

        </div>

        <div className='container mx-auto px-8'>
            <section id="home"><Hero/></section>
            <section id="about"><About/></section>
            <section id="experience"><Experience/></section>
            <section id="technologies"><Technologies/></section>
            <section id="projects"><Projects/></section>
            <section id="contact"><Contact/></section>
        </div>
      </div>
  )
}

export default App