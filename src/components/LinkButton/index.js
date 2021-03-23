import React from 'react'
import { LinkButtonContainer, LinkText, ArrowForward } from './LinkButtonElements'

const LinkButton = ({ label }) => {
    return (
        <div>
            <LinkButtonContainer>
                <LinkText>{label}</LinkText>
                <ArrowForward style={{ transform: `rotate(-45deg)` }}/>
            </LinkButtonContainer>
        </div>
    )
}

export default LinkButton
