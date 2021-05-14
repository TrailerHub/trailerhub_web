import React from 'react'
import { FooterContainer, ContactContentContainer, FooterWrapper, LogoContainer, ContentContainer, CopyRightText, FooterNoLink, FooterLink, LogoImage, FooterSubHeading, CopyTermsPolicyContainer, CopyTermsLink } from './FooterElements'
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
                    <CopyTermsPolicyContainer>
                        <CopyRightText>{String.fromCharCode(169)} TrailerHub, Inc.</CopyRightText>
                        <CopyTermsLink to='/termsofservicedoc.html' target="_blank">Terms of Service</CopyTermsLink>
                        <CopyTermsLink to='/privacypolicydoc.html' target="_blank">Privacy Policy</CopyTermsLink>
                    </CopyTermsPolicyContainer>
                </ContentContainer>
                <ContentContainer>
                    <FooterSubHeading>Company</FooterSubHeading>
                    <FooterLink to="about" smooth={true} duration={500} spy={true} exact='true'>About</FooterLink>
                    <FooterLink to="rent" smooth={true} duration={500} spy={true} exact='true'>Rent</FooterLink>
                    <FooterLink to="host" smooth={true} duration={500} spy={true} exact='true'>Host</FooterLink>
                    <FooterLink to="business" smooth={true} duration={500} spy={true} exact='true'>Business</FooterLink>
                </ContentContainer>
                <ContentContainer>
                    <ContactContentContainer>
                        <FooterSubHeading>Get in Touch</FooterSubHeading>
                        <FooterNoLink>(888) - 777 - 9423</FooterNoLink>
                        <FooterNoLink>support@trailerhub.io</FooterNoLink>
                    </ContactContentContainer>
                </ContentContainer>
            </FooterContainer>
        </FooterWrapper>
    )
}

export default Footer