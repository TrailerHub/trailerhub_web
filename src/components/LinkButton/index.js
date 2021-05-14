import React from 'react'
import { LinkButtonContainer, LinkText, ArrowForward } from './LinkButtonElements'

const LinkButton = ({ label, dark, href }) => {
    return (
        <div>
            <LinkButtonContainer dark={dark}>
                <LinkText href={href} target="_blank">{label}</LinkText>
                <ArrowForward style={{ transform: `rotate(-45deg)` }}/>
            </LinkButtonContainer>
        </div>
    )
}

export default LinkButton
