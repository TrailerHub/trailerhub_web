import Cards from '../components/Cards'
import Contact from '../components/Contact'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { secOne, secThree, secTwo } from '../content/data.js'
import Socials from '../components/Socials';

const Home = () => {
    return (
        <div> 
            <HeroSection />
            <Socials />
            <div className='bg-shape'>
                <Cards />
                <InfoSection {...secOne} />
                <InfoSection {...secTwo} />
                <InfoSection {...secThree} />
            </div>
            <Contact/>
        </div>
    )
}

export default Home