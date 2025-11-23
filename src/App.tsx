import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
     <>
        <Navbar />
        <main>
          <Hero />

          <Projects />

          <section id='contact'>
            <h2>this is the contact </h2>
          </section>
        </main>
     </>
  )
}

export default App
