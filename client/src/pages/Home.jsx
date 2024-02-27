import React from 'react'
import Hero from '../components/Hero/Hero'
import Navbar from '../components/Navbar/Navbar'
import About from '../components/About/About'
import Sponsors from '../components/Sponsors/Sponsors'
import Registration from '../components/Registration/Registration'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Sponsors />
            <Registration />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home