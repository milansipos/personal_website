
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import About from './sections/About'
import Footer from './components/Footer'
import { MotionConfig } from 'framer-motion'

function App() {

  return (
     // reducedMotion="user": no slide animations if the OS asks for reduced motion
     <MotionConfig reducedMotion="user">
        <Navbar />
        <main>
          <Hero />

          <About />

          <Projects />

          <Contact />
        </main>
        <Footer />
     </MotionConfig>
  )
}

export default App
