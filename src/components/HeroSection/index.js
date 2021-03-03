import React, { useState } from 'react'
import { HeroContainer, VideoBg, HeroBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import { Button } from '../ButtonElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    };
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src='../../videos/video.mp4' type='video/m4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>TrailerHub</HeroH1>
                <HeroP>Trailer Sharing Platform
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='about' smooth={true} duration={500} spy={true} exact='true'  onMouseEnter={onHover} onMouseLeave={onHover
                    } primary="true" dark="true"
                    >About {hover ? <ArrowForward style={{transform: `rotate(90deg)`}}/> : <ArrowRight style={{transform: `rotate(90deg)`}}/>}</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection