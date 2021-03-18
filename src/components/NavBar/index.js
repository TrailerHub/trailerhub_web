import React, { useState, useEffect } from 'react';
import { Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavBarElements';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';

const NavBar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);
    const changeNav = () => {
        window.scrollY >= 80 ? setScrollNav(true) : setScrollNav(false);
    };
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);
    const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        <>
            <IconContext.Provider value={{ color: '#1b1b1b' }}>
                <Nav scrollNav={scrollNav}>
                    <NavBarContainer>
                        <NavLogo to='/' onClick={toggleHome}><img src="/images/trailerhub_logo.svg" alt="TrailerHub Logo"/></NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="rent" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Rent</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="host" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Host</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="business" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Business</NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink as="a" target="_blank" href="https://github.com/zoeschmitt" scrollNav={scrollNav}>Contact Us</NavBtnLink>
                        </NavBtn>
                    </NavBarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default NavBar