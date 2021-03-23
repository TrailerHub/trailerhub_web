import React, { useState, useEffect } from 'react';
import { Nav, LogoImage, NavBarContainer, BtnDropDownWrapper, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavBarElements';
import { FiMenu } from 'react-icons/fi';
import { animateScroll as scroll } from 'react-scroll';
import DropDown from '../DropDown';

const NavBar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);
    const [open, setOpen] = useState(false);

    const changeNav = () => {
        window.scrollY >= 80 ? setScrollNav(true) : setScrollNav(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    const handleMouseEnter = () => {
        setOpen(true);
    }
    const handleMouseLeave = () => {
        setOpen(false);
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavBarContainer>
                    <NavLogo to='/' onClick={toggleHome} ><LogoImage src="/images/logo_title.svg" alt="TrailerHub Logo" scrollNav={scrollNav} /></NavLogo>
                    <MobileIcon onClick={toggle} scrollNav={scrollNav}>
                        <FiMenu />
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
                    <BtnDropDownWrapper>
                        <NavBtn>
                            <NavBtnLink onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()} scrollNav={scrollNav}>Contact Us</NavBtnLink>
                        </NavBtn>
                        {open && <DropDown isActive={open} />}
                    </BtnDropDownWrapper>
                </NavBarContainer>
            </Nav>
        </>
    )
}

export default NavBar