import { useState } from 'react'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/navbar/navbar'
import Home from './Components/Home/Home'
import Herosection from './Components/HeroSection/Herosection'
import About from './Components/AboutMe/About'
import Skill from './Components/Skill/Skill'
import Project from './Components/Projects/Project'
import Education from './Components/Education/Education'
import Experience from './Components/Experience/Experience'
import Achivement from './Components/Achivement/Achivement'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navbar></Navbar>
   <Herosection></Herosection>
   <About></About>
   <Skill></Skill>
   <Project></Project>
   <Education></Education>
   <Experience></Experience>
   <Achivement></Achivement>
   <Contact></Contact>
   <Footer></Footer>
   <Home></Home>
  

    </>
  )
}

export default App
