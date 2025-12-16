import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Tools from "./components/Tools"
import Projects from "./components/Projects"
import AboutMe from "./components/AboutMe"
import Footer from "./components/Footer"

export default function App() {
  return (
    <>
      <div className="max-w-3xl mx-auto px-6">
        <Navbar />
        <Hero />
        <Tools />
        <AboutMe />
        <Projects />
      </div>

      <Footer />

      
    </>
  )
}