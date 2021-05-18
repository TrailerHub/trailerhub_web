import React from 'react'
import { LinkButtonContainer, LinkText, ArrowForward } from './LinkButtonElements'

const LinkButton = ({ label, href, black }) => {
    return (
        <>
            <LinkButtonContainer black={black}>
                <LinkText href={href} target="_blank"  black={black}>{label}</LinkText>
                <ArrowForward  black={black} style={{ transform: `rotate(-45deg)` }}/>
            </LinkButtonContainer>
        </>
    )
}

export default LinkButton
