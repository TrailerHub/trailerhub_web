import React, { useState, useEffect, useRef } from 'react';
import { Nav, LogoImage, NavBarContainer, BtnDropDownWrapper, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavBarElements';
import { FiMenu } from 'react-icons/fi';
import { animateScroll as scroll } from 'react-scroll';
import DropDown from '../DropDown';
import { useDetectOutsideClick } from '../../hooks/useDetectOutsideClick';

const NavBar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);
    const dropdownRef = useRef(null);
    const [open, setOpen] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setOpen(!open);
    
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
            <Nav scrollNav={scrollNav} >
                <NavBarContainer>
                    <NavLogo to='/' onClick={toggleHome} title="TrailerHub"><LogoImage src="/images/logo_title.svg" alt="TrailerHub Logo" scrollNav={scrollNav} title="TrailerHub"/></NavLogo>
                    <MobileIcon onClick={toggle} scrollNav={scrollNav}>
                        <FiMenu type="button" aria-label="open menu" aria-haspopup="true"/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={60} scrollNav={scrollNav}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="rent" smooth={true} duration={500} spy={true} exact='true' offset={60} scrollNav={scrollNav}>Rent</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="host" smooth={true} duration={500} spy={true} exact='true' offset={60} scrollNav={scrollNav}>Host</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="business" smooth={true} duration={500} spy={true} exact='true' offset={60} scrollNav={scrollNav}>Business</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <BtnDropDownWrapper ref={dropdownRef}>
                        <NavBtn>
                            <NavBtnLink onClick={onClick} scrollNav={scrollNav}>Contact Us</NavBtnLink>
                        </NavBtn>
                        {open && <DropDown isActive={open} />}
                    </BtnDropDownWrapper>
                </NavBarContainer>
            </Nav>
        </>
    )
}

export default NavBar