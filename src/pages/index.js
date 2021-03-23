import React, { useState } from 'react'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { secOne, secThree, secTwo } from '../components/InfoSection/data'
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