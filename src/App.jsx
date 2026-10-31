import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechnicalSkills from './components/TechnicalSkills'
import Process from './components/Process'
import Projects from './components/Projects'
import Internships from './components/Internships'
import SoftSkills from './components/SoftSkills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    })
  }, [])

  return (
    <div className="bg-black text-white min-h-screen selection:bg-[#ff2a2a] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechnicalSkills />
        <Process />
        <Projects />
        <Internships />
        <SoftSkills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
