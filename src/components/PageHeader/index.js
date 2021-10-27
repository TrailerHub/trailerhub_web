import React from 'react'
import { HeaderContainer, TextWrapper, Heading, SubText, DownArrow, ArrowContainer } from './PageHeaderElements';
import RadioButtons from '../RadioButtons';
import { ButtonLink } from '../ButtonLinkElements';

export const PageHeader = ({ heading, subtext, buttonLink, buttonText, radioButton, toggleRentHostSteps }) => {
    return (
        <div>
            <HeaderContainer>
                <TextWrapper>
                    <Heading>{heading}</Heading>
                    <SubText>{subtext}</SubText>
                    {radioButton !== undefined && <RadioButtons radioButton={radioButton} toggleRentHostSteps={toggleRentHostSteps} />}
                    {(buttonLink !== undefined && buttonText !== undefined) && <ButtonLink to={buttonLink}>{buttonText}</ButtonLink>}
                    {radioButton !== undefined && <ArrowContainer>
                        <DownArrow />
                    </ArrowContainer>}
                </TextWrapper>
            </HeaderContainer>
        </div>
    )
}
