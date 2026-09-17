import { useState } from 'react'
import viteLogo from './assets/vite.svg'
import './App.css'
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
import Nav from './Components/Nav/Nav'
import Services from './Components/Services/Services'
import TechStack from './Components/TechStack/TechStack'
import Interactive from './Components/Interactive/Interactive'
import CurrentlyLearning from './Components/CurrentlyLearning/CurrentlyLearning'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Nav></Nav>
   <Herosection></Herosection>
   <About></About>
   <Skill></Skill>
   <Services></Services>
   <TechStack></TechStack>
   <Project></Project>
   <Education></Education>
   <Experience></Experience>
   <CurrentlyLearning></CurrentlyLearning>
   <Achivement></Achivement>
   <Interactive></Interactive>
   <Contact></Contact>
   <Footer></Footer>
   <Home></Home>
  

    </>
  )
}

export default App
