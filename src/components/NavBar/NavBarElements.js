import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
 
export const Nav = styled.nav`
    background: ${({scrollNav}) => scrollNav ? 'rgba(255, 255, 255, 0.3)' : 'transparent'};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.15rem;
    position: sticky;
    top: 0;
    z-index: 10;
    color: ${({scrollNav}) => scrollNav ? '#000' : '#fff'};
    /* backdrop-filter: ${({scrollNav}) => scrollNav ? 'blur(5px)' : 'none'};
    -webkit-backdrop-filter: ${({scrollNav}) => scrollNav ? 'blur(5px)' : 'none'};  */

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 140px;

    @media screen and (max-width: 768px) {
        padding: 0 50px;
    }

    @media screen and (max-width: 480px) {
        padding: 0 20px;
    }
`;

export const NavLogo = styled(LinkS)`
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 24px;
    text-decoration: none;
`;

export const LogoImage = styled.img`
    @media screen and (max-width: 1200px) {
        filter:  brightness(0) invert(1);
    }
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 780px) {
        filter:  brightness(0) invert(1);
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
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 780px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    display: flex;
    align-items: center;
    height: 80px;
`;

export const NavLinks = styled(LinkS)`
    /* color: #fff; */
    display: flex;
    align-items: center;
    text-decoration: none;
    //font-size: 1.1rem;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-weight: 400;
    padding-right: 30px;

    &.active {
        border-bottom: 3px solid #48adf5;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 780px) {
        display: none;
    }
`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 12px;
    background: ${({scrollNav}) => scrollNav ? '#373737' : 'rgba(255, 255, 255, 0.3)'};
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
        color: #fff;
    }
`;