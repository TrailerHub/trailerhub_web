import React from 'react'
import { LinkButtonContainer, LinkText, ArrowForward } from './LinkButtonElements'

const LinkButton = ({ label, dark }) => {
    return (
        <div>
            <LinkButtonContainer dark={dark}>
                <LinkText>{label}</LinkText>
                <ArrowForward style={{ transform: `rotate(-45deg)` }}/>
            </LinkButtonContainer>
        </div>
    )
}

export default LinkButton
