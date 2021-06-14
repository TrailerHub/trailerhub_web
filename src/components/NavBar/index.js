import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Nav, LogoImage, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavBarElements';
import { FiMenu } from 'react-icons/fi';
import { animateScroll as scroll } from 'react-scroll';

const NavBar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);
    const [location, setLocation] = useState(useLocation().pathname);
    var currentLocation = useLocation().pathname;

    const changeNav = () => {
        window.scrollY >= 80 ? setScrollNav(true) : setScrollNav(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
        if (currentLocation.pathname !== location) {
            setLocation(currentLocation);
        }
        console.log(location);
    }, [currentLocation, location]);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <Nav scrollNav={scrollNav} path={location}>
                <NavBarContainer>
                    <NavLogo to='/' onClick={toggleHome} title="TrailerHub"><LogoImage src="/images/logo_title.svg" alt="TrailerHub Logo" scrollNav={scrollNav} title="TrailerHub" location={location}/></NavLogo>
                    <MobileIcon onClick={toggle} scrollNav={scrollNav}>
                        <FiMenu type="button" aria-label="open menu" aria-haspopup="true" />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks scrollNav={scrollNav} onClick={() => toggleHome()} to="/">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks scrollNav={scrollNav} onClick={() => toggleHome()} to="/howitworks" >How it Works</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks scrollNav={scrollNav} onClick={() => toggleHome()} to="/faq">FAQ</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks scrollNav={scrollNav} onClick={() => toggleHome()} to="/learn" >Learn</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn location={location}>
                        <NavBtnLink to="contact" scrollNav={scrollNav} smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact Us</NavBtnLink>
                    </NavBtn>
                </NavBarContainer>
            </Nav>
        </>
    )
}

export default NavBar