import { useState } from 'react'
import Contact from '../components/Contact'
import InfoSection from '../components/InfoSection'
import { hostSecOne, hostSecTwo, hostSecThree, hostSecFour, hostSecFive, hostSecSix, hostAdInfo, hostCalculationsMessage1, hostCalculationsMessage2, hostCalculationsMessage3, hostCalculationsExample1, hostCalculationsExample2 } from '../content/hostSteps'
import InfoContainer from '../components/InfoContainer'
import { rentSecOne, rentSecTwo, rentSecThree, rentSecFour, rentSecFive, renterAdInfo } from '../content/renterSteps'
import { PageHeader } from '../components/PageHeader'
import { CenterFlex, P, WhiteMiddleContainer, H2, HR } from '../components/InsuranceSection/InsuranceSectionElements';
import { Link as LinkR } from 'react-router-dom'


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
                        <InfoContainer info={renterAdInfo} />
                    </>
                    :
                    <>
                        <WhiteMiddleContainer>
                            <div>
                                <H2>Earning as a Host</H2>
                                <CenterFlex><HR /></CenterFlex>
                                <CenterFlex><P> As a Host, you can earn a side income by renting out your underused trailer to people in your community. Here are a couple of examples of how much you could earn: </P></CenterFlex>
                                <CenterFlex><P> <b>Example 1:</b> you own a 5'x12' utility trailer,
                                    and you rent it out for a <b>$25 per day</b> rental rate. Your trailer is rented on average 10 days every month, so you will earn <b>$225 per month</b>
                                    (that's your $25 per day rate multiplied by 10 days, minus the TrailerHub 10% service fee).</P></CenterFlex>
                                <CenterFlex><P> <b>Example 2:</b> you own a 6'x16' enclosed cargo trailer that you rent out for $70 per day. That's <b>$630 per month</b> if it's rented 10 days per month, and <b>$7,560 per year!</b></P></CenterFlex>
                                <CenterFlex><P> {hostCalculationsMessage2}</P></CenterFlex>
                                <CenterFlex><P> For more information on insurance and insurance premium reimbursement vist the <LinkR to="/insurance">Insurance</LinkR> page of the website or call us at +1 (888) 777-9423. Happy hosting!</P></CenterFlex>
                            </div>
                        </WhiteMiddleContainer>
                        <InfoSection {...hostSecOne} />
                        <InfoSection {...hostSecTwo} />
                        <InfoSection {...hostSecThree} />
                        <InfoSection {...hostSecFour} />
                        <InfoSection {...hostSecFive} />
                        <InfoSection {...hostSecSix} />
                        <InfoContainer info={hostAdInfo} />
                    </>
                }
            </div>
            <Contact />
        </div>
    )
}

export default HowItWorks
