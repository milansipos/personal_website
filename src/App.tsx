
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import About from './sections/About'
import Footer from './components/Footer'

function App() {

  return (
     <>
        <Navbar />
        <main>
          <Hero />

          <About />

          <Projects />

          <Contact />
        </main>
        <Footer />
     </>
  )
}

export default App
