import Cards from '../components/Cards'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { secOne, secThree, secTwo } from '../components/InfoSection/data'

const Home = () => {
    return (
        <div> 
            <HeroSection />
            <div className='bg-shape'>
                <Cards />
                <InfoSection {...secOne} />
                <InfoSection {...secTwo} />
                <InfoSection {...secThree} />
            </div>
        </div>
    )
}

export default Home