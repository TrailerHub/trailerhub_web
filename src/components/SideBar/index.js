import React from 'react'
import { SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarMenu, SideBarLink } from './SideBarElements';

const SideBar = ({isOpen, toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="/" onClick={toggle}>About</SideBarLink>
                    <SideBarLink to="/howitworks" onClick={toggle}>How it Works</SideBarLink>
                </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar