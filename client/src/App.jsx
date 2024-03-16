import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Registration from './components/Registration/Registration'
import Sponsors from './components/Sponsors/Sponsors'
import Navbar from "./components/Navbar/Navbar";

function App() {

  return (
    <div className="flex flex-col relative">
      <Navbar />
      <div>
        <Hero />
        <About />
        <Sponsors/>
        <Registration />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
