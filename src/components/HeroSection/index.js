import React, { useState } from 'react'
import { HeroContainer, ButtonsWrapper, Image, ImageContainer, HeroWrapper, HeroBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper } from './HeroElements';
import { Button } from '../ButtonElements'
import LinkButton from '../LinkButton';

const HeroSection = () => {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    };
    return (
        <HeroContainer id="home">
            <HeroBg src="/images/hero_shape.svg" alt="Shape" />
            <HeroWrapper>
                <HeroContent>
                    <HeroH1>Rent trailers near you</HeroH1>
                    <HeroP>Choose the trailer thats right for your needs from local hosts.</HeroP>
                    <ButtonsWrapper>
                        <HeroBtnWrapper>
                            <Button to='about' smooth={true} duration={500} spy={true} exact='true' onMouseEnter={onHover} onMouseLeave={onHover
                            } primary="true" dark="true"
                            >Learn More </Button>
                        </HeroBtnWrapper>
                        {/* <LinkButton label={'iOS'} dark={true}/>
                        <LinkButton label={'Android'} dark={true}/> */}
                    </ButtonsWrapper>
                </HeroContent>
                <ImageContainer><Image src="/images/trailerhub_search_page.png" alt="TrailerHub Search Screen" /></ImageContainer>
            </HeroWrapper>
        </HeroContainer>
    )
}

export default HeroSection