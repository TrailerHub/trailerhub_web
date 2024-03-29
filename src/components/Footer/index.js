import React from 'react'
import { FooterContainer, FlexWrap, ContactContentContainer, FooterWrapper, LogoContainer, ContentContainer, CopyRightText, FooterNoLink, FooterLink, LogoImage, FooterSubHeading, CopyTermsPolicyContainer, CopyTermsLink } from './FooterElements'
import { animateScroll as scroll } from 'react-scroll';

const Footer = ({path}) => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        <FooterWrapper path={path}>
            <FooterContainer>
                <ContentContainer>
                    <FlexWrap>
                        <LogoContainer to='/' onClick={toggleHome}>
                            <LogoImage src="/images/logo_title.svg" alt="TrailerHub Logo" />
                        </LogoContainer>
                    </FlexWrap>
                    <CopyTermsPolicyContainer>
                        <CopyRightText>{String.fromCharCode(169)} TrailerHub, Inc.</CopyRightText>
                        <CopyTermsLink to='/termsofservicedoc' smooth={true} duration={500} spy={true} exact='true' onClick={() => toggleHome()}>Terms of Service</CopyTermsLink>
                        <CopyTermsLink to='/privacypolicydoc' smooth={true} duration={500} spy={true} exact='true' onClick={() => toggleHome()}>Privacy Policy</CopyTermsLink>
                    </CopyTermsPolicyContainer>
                </ContentContainer>
                <ContentContainer>
                    <FooterSubHeading>Company</FooterSubHeading>
                    <FooterLink to="/" smooth={true} duration={500} spy={true} exact='true' onClick={() => toggleHome()}>About</FooterLink>
                    <FooterLink to="/howitworks" smooth={true} duration={500} spy={true} exact='true' onClick={() => toggleHome()}>How it works</FooterLink>
                    <FooterLink to="/faq" smooth={true} duration={500} spy={true} exact='true' onClick={() => toggleHome()}>FAQ</FooterLink>
                    <FooterLink to="/learn" smooth={true} duration={500} spy={true} exact='true' onClick={() => toggleHome()}>Learn</FooterLink>
                    <FooterLink to="/insurance" smooth={true} duration={500} spy={true} exact='true' onClick={() => toggleHome()}>Insurance</FooterLink>
                </ContentContainer>
                <ContentContainer>
                    <ContactContentContainer>
                        <FooterSubHeading>Get in Touch</FooterSubHeading>
                        <FooterLink href="tel:+18887779423">(888) - 777 - 9423</FooterLink>
                        <FooterNoLink>support@trailerhub.io</FooterNoLink>
                    </ContactContentContainer>
                </ContentContainer>
            </FooterContainer>
        </FooterWrapper>
    )
}

export default Footer