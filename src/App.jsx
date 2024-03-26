import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Registration from "./components/Registration/Registration";
import Sponsors from "./components/Sponsors/Sponsors";
import Navbar from "./components/Navbar/Navbar";
import HomeAnim from "./components/HomeAnim/HomeAnim";
import { useRef } from "react";

function App() {
  return (
    <div className="relative h-full">
      <div className="absolute z-0">
        <HomeAnim />
      </div>
      <Navbar />
      <Hero />
      <About />
      <Sponsors />
      <Registration />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
