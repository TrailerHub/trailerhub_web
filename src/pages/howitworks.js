import { useState } from 'react'
import Contact from '../components/Contact'
import InfoSection from '../components/InfoSection'
import { hostSecOne, hostSecTwo, hostSecThree, hostSecFour, hostSecFive, hostSecSix } from '../components/InfoSection/hostSteps'
import { rentSecOne, rentSecTwo, rentSecThree, rentSecFour, rentSecFive } from '../components/InfoSection/renterSteps'
import { PageHeader } from '../components/PageHeader'

const HowItWorks = () => {
    const [radioButton, setRadioButton] = useState(true);

    const toggleRentHostSteps = (steps) => {
        setRadioButton(steps);
    }
    return (
        <div>
            <PageHeader radioButton={radioButton} toggleRentHostSteps={toggleRentHostSteps} />
            <div className="bg-shape2">
                {radioButton ?
                    <>
                        <InfoSection {...rentSecOne} />
                        <InfoSection {...rentSecTwo} />
                        <InfoSection {...rentSecThree} />
                        <InfoSection {...rentSecFour} />
                        <InfoSection {...rentSecFive} />
                    </>
                    :
                    <>
                        <InfoSection {...hostSecOne} />
                        <InfoSection {...hostSecTwo} />
                        <InfoSection {...hostSecThree} />
                        <InfoSection {...hostSecFour} />
                        <InfoSection {...hostSecFive} />
                        <InfoSection {...hostSecSix} />
                    </>
                }
            </div>
            <Contact/>
        </div>
    )
}

export default HowItWorks
