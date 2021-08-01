import React, { useState } from 'react'
import { HeroContainer, ButtonsWrapper, Image, ImageContainer, HeroWrapper, HeroBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import { Button } from '../ButtonElements'
import LinkButton from '../LinkButton';
import Socials from '../Socials';

const HeroSection = () => {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    };
    return (
        <HeroContainer id="home">
            <Socials />
            <HeroBg src="/images/hero_shape.svg" alt="Shape" />
            <HeroWrapper>
                <HeroContent>
                    <HeroH1>Trailer sharing marketplace</HeroH1>
                    <HeroP title="TrailerHub">Join our growing community of trailer hosts and renters in Austin, Texas. Sign up on our mobile app to rent trailers near you.</HeroP>
                    <ButtonsWrapper>
                        <HeroBtnWrapper>
                            <Button to='about' smooth={true} duration={500} spy={true} exact='true' onMouseEnter={onHover} onMouseLeave={onHover
                            } primary="true" dark="true" offset={60}
                            >Learn More
                            {hover ? <ArrowForward style={{ transform: `rotate(90deg)` }} /> : <ArrowRight style={{ transform: `rotate(90deg)` }} />}</Button>
                        </HeroBtnWrapper>
                        <LinkButton label={'iOS'} black={true} href={'https://apps.apple.com/us/app/trailerhub-rent-trailers/id1551725129'} />
                        <LinkButton label={'Android'} black={true} href={'https://play.google.com/store/apps/details?id=io.trailerhub.trailerhub'} />
                    </ButtonsWrapper>
                </HeroContent>
                <ImageContainer><Image src="/images/trailerhub_search_page.png" alt="TrailerHub Search Screen" /></ImageContainer>
            </HeroWrapper>
        </HeroContainer>
    )
}

export default HeroSection