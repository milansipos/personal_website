
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import './App.css'
import Contact from './sections/Contact'
import CodeScrubber from './components/Scrubber'
import Footer from './components/Footer'

function App() {

  return (
     <>
        <Navbar />
        <main>
          <Hero />

          <CodeScrubber />

          <Projects />

          <Contact />
        </main>
        <Footer />
     </>
  )
}

export default App
