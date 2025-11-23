import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import './App.css'
import Contact from './sections/Contact'
import About from './sections/About'

function App() {
  const [count, setCount] = useState(0)

  return (
     <>
        <Navbar />
        <main>
          <Hero />

          {/* TODO: add gif scrolling effect */}
          <About />

          <Projects />

          <Contact />
        </main>
     </>
  )
}

export default App
