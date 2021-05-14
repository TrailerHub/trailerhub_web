import React, { useState } from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Cards from '../components/Cards'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { secOne, secThree, secTwo } from '../components/InfoSection/data'

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
            <div className='bg-shape'>
                <Cards />
                <InfoSection {...secOne} />
                <InfoSection {...secTwo} />
                <InfoSection {...secThree} />
            </div>
            <Footer />
        </>
    )
}

export default Home