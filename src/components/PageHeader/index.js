import React from 'react'
import { HeaderContainer, TextWrapper, Heading, SubText, DownArrow, ArrowContainer } from './PageHeaderElements';
import RadioButtons from '../RadioButtons';

export const PageHeader = ({ radioButton, toggleRentHostSteps }) => {
    return (
        <div>
            <HeaderContainer>
                <TextWrapper>
                    <Heading>How it works</Heading>
                    <SubText>Learn how to rent a trailer or get started as a host on TrailerHub.</SubText>
                    <RadioButtons radioButton={radioButton} toggleRentHostSteps={toggleRentHostSteps} />
                    <ArrowContainer>
                        <DownArrow />
                    </ArrowContainer>
                </TextWrapper>
            </HeaderContainer>
        </div>
    )
}
