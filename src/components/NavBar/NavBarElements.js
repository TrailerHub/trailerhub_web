import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import { trailerHubBlack } from '../../colors'

export const Nav = styled.nav`
    background: ${({ scrollNav }) => scrollNav ? 'rgba(255, 255, 255, 0.5)' : 'transparent'};
    height: 80px;
    margin-top: -80px;
    display: ${({ path }) => (path === '/privacypolicydoc.html' || path === '/termsofservicedoc.html') ? 'none' : 'flex'};;
    justify-content: center;
    align-items: center;
    font-size: 1.15rem;
    position: sticky;
    top: 0;
    z-index: 10;
    color: ${({ scrollNav }) => scrollNav ? '#000' : '#fff'};
    padding: 0 140px;

    @media screen and (max-width: 768px) {
        padding: 0 50px;
    }

    @media screen and (max-width: 480px) {
        padding: 0 20px;
    }

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavBarContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    z-index: 1;
    width: 100%;
`;

export const NavLogo = styled(LinkR)`
    position: absolute;
    left: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
`;

export const LogoImage = styled.img`
    width: 100%;
    filter: ${({ location }) => location === '/howitworks' || location === '/faq' || location === '/learn' ? 'brightness(0) invert(1)' : 'none'};
    filter: ${({ scrollNav }) => scrollNav && 'none'};
    
    @media screen and (max-width: 1100px) {
        filter:  brightness(0) invert(1);
    }
    @media screen and (max-width: 900px) {
        filter: ${({ scrollNav }) => scrollNav ? 'none' : 'brightness(0) invert(1)'};
    }
    @media screen and (max-width: 768px) {
        width: 80%;
    }
    
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 1100px) {
        filter: ${({ scrollNav }) => scrollNav ? 'none' : 'brightness(0) invert(1)'};
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    text-align: center;
    /* left: 0;
    right: 0; */

    @media screen and (max-width: 1100px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    display: flex;
    align-items: center;
    height: 80px;
`;

export const NavLinks = styled(LinkR)`
    color: ${({ scrollNav }) => scrollNav ? trailerHubBlack : '#fff'};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-weight: 400;
    padding-right: 30px;
`;

export const BtnDropDownWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`

export const NavBtn = styled.div`
    position: absolute;
    right: 0;
    display: ${({ location }) => location === '/faq' ? 'none' : 'flex'};
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1100px) {
        display: none;
    }
`;

export const NavBtnLink = styled(LinkS)`
    border-radius: 12px;
    background: ${({ scrollNav }) => scrollNav ? '#373737' : 'rgba(255, 255, 255, 0.3)'};
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
        background: #373737;
    }
`;