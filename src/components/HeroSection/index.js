import React, { useState } from 'react'
import { HeroContainer, Image, ImageContainer, HeroWrapper, HeroBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import { Button } from '../ButtonElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    };
    return (
        <HeroContainer id="home">
            <HeroBg>

            </HeroBg>
            <HeroWrapper>
                <HeroContent>
                    <HeroH1>Rent trailers near you</HeroH1>
                    <HeroP>Cheaper, faster, local trailers blah blah blah blah blah blah blah blah blah blah.
                </HeroP>
                    <HeroBtnWrapper>
                        <Button to='about' smooth={true} duration={500} spy={true} exact='true' onMouseEnter={onHover} onMouseLeave={onHover
                        } primary="true" dark="true"
                        >Learn More </Button>
                    </HeroBtnWrapper>
                </HeroContent>
                <ImageContainer><Image src="/images/trailerhub1.svg" alt="TrailerHub Search Screen" /></ImageContainer>
            </HeroWrapper>
        </HeroContainer>
    )
}

export default HeroSection