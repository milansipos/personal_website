
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import './App.css'
import Contact from './sections/Contact'
import About from './sections/About'
import CodeScrubber from './components/Scrubber'

function App() {

  return (
     <>
        <Navbar />
        <main>
          <Hero />

          <h2></h2>

          {/* TODO: add gif scrolling effect */}
          <CodeScrubber />

          <Projects />

          <Contact />
        </main>
     </>
  )
}

export default App
