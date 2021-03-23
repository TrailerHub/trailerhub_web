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
                    <SideBarLink to="about" onClick={toggle}>About</SideBarLink>
                    <SideBarLink to="renters" onClick={toggle}>Renters</SideBarLink>
                    <SideBarLink to="hosts" onClick={toggle}>Hosts</SideBarLink>
                    <SideBarLink to="business" onClick={toggle}>Business</SideBarLink>
                </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar