import React, { useState } from 'react'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { secFour, secOne, secThree, secTwo, secFive, secSix } from '../components/InfoSection/data'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <NavBar toggle={toggle} />
            <HeroSection />
            <Cards />
            {/* <div className='bg-shape'> <h1>blah</h1></div> */}
            {/* <img src='/images/grey_shape.svg' alt='shape' className='bg-shape'></img> */}
                <InfoSection {...secOne} />
                <InfoSection {...secTwo} />
                <InfoSection {...secThree} />
            <Footer />
        </>
    )
}

export default Home