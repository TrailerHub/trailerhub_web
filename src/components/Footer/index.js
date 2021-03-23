import React from 'react'
import { FooterContainer, FooterWrapper, LogoContainer, ContentContainer, CopyRightText, FooterNoLink, FooterLink, LogoImage, FooterSubHeading } from './FooterElements'
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        <FooterWrapper>
            <FooterContainer>
                <ContentContainer>
                    <LogoContainer to='/' onClick={toggleHome}>
                        <LogoImage src="/images/logo_title.svg" alt="TrailerHub Logo" />
                    </LogoContainer>
                    <CopyRightText>TrailerHub, Inc.</CopyRightText>
                </ContentContainer>
                <ContentContainer>
                    <FooterSubHeading>Company</FooterSubHeading>
                    <FooterLink to="about" smooth={true} duration={500} spy={true} exact='true'>About</FooterLink>
                    <FooterLink to="rent" smooth={true} duration={500} spy={true} exact='true'>Rent</FooterLink>
                    <FooterLink to="host" smooth={true} duration={500} spy={true} exact='true'>Host</FooterLink>
                    <FooterLink to="business" smooth={true} duration={500} spy={true} exact='true'>Business</FooterLink>
                </ContentContainer>
                <ContentContainer>
                    <FooterSubHeading>Get in Touch</FooterSubHeading>
                    <FooterNoLink>(219) - 394 - 2933</FooterNoLink>
                    <FooterNoLink>(219) - 394 - 2933</FooterNoLink>
                    <FooterNoLink>support@trailerhub.io</FooterNoLink>
                    <FooterNoLink>support@trailerhub.io</FooterNoLink>
                </ContentContainer>
            </FooterContainer>
        </FooterWrapper>
    )
}

export default Footer