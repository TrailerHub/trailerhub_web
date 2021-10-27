import React, { useState } from 'react'
import { Padding, IconTextContainer, SmallText, LightText, OutlineContainer, IconGrid, TrailerInfoDiv, PriceH3, Button, InfoContainer, HR, ButtonsWrapper, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BigBtnWrapper } from './TrailerContentElements'
import { FaWeightHanging } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import { GoPlug } from 'react-icons/go'
import { AiFillStar } from 'react-icons/ai'
import Icon from './Icon'
import { IconContext } from "react-icons";

const TrailerContent = ({ topLine, headline, description, buttonLinkTo, buttonLabel, dailyRate, location, rating }) => {
    return (
        <InfoContainer>
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                        <TextWrapper>
                            <Heading>{headline}</Heading>
                            <TopLine>{topLine}</TopLine>
                            <Padding>
                                <IconTextContainer>
                                    <IconTextContainer>
                                        <IconContext.Provider value={{ size: '1rem', color: 'gray' }}>
                                            <MdLocationOn />
                                        </IconContext.Provider>
                                        <SmallText>{location}</SmallText>
                                    </IconTextContainer>
                                    <IconTextContainer>
                                        <IconContext.Provider value={{ size: '1rem', color: 'gold' }}>
                                            <AiFillStar />
                                        </IconContext.Provider>
                                        <SmallText>{rating}</SmallText>
                                    </IconTextContainer>
                                </IconTextContainer>
                            </Padding>
                            <HR />
                            <Subtitle>{description}</Subtitle>
                            <br />
                            <br />
                            <IconGrid>
                                <Icon icon={<FaWeightHanging />} title="3000lb" />
                                <Icon icon={<svg width="55" height="22" viewBox="0 0 55 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 3C0 1.34314 1.34314 0 3 0H9C10.6569 0 12 1.34314 12 3V10H21C21 8.89542 21.8954 8 23 8H24.6713C25.4442 7.3746 26.4283 7 27.5 7C28.5717 7 29.5558 7.3746 30.3287 8H32C33.1046 8 34 8.89542 34 10H43V3C43 1.34314 44.3431 0 46 0H52C53.6569 0 55 1.34314 55 3V19C55 20.6569 53.6569 22 52 22H46C44.3431 22 43 20.6569 43 19V13H34C34 14.1046 33.1046 15 32 15H30.3287C29.5558 15.6254 28.5717 16 27.5 16C26.4283 16 25.4442 15.6254 24.6713 15H23C21.8954 15 21 14.1046 21 13H12V19C12 20.6569 10.6569 22 9 22H3C1.34314 22 0 20.6569 0 19V3Z" fill="#090909" />
                                </svg>} title="3000lb" />
                                <Icon icon={<GoPlug />} title="3000lb" />
                                <Icon icon={<svg width="34" height="47" viewBox="0 0 34 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M34 17C34 23.9431 29.8378 29.914 23.8723 32.5536V36.8936H24.0426C25.1471 36.8936 26.0426 37.789 26.0426 38.8936V39.234C26.0426 40.3386 25.1471 41.234 24.0426 41.234H23.8723V43.2979C23.8723 44.9547 22.5292 46.2979 20.8723 46.2979H13.8511C12.1942 46.2979 10.8511 44.9547 10.8511 43.2979V41.234H10.6809C9.57628 41.234 8.68085 40.3386 8.68085 39.234V38.8936C8.68085 37.789 9.57628 36.8936 10.6809 36.8936H10.8511V32.8539C4.50144 30.3895 0 24.2204 0 17C0 7.61116 7.61116 0 17 0C26.3888 0 34 7.61116 34 17Z" fill="black" />
                                </svg>
                                } title="3000lb" />
                            </IconGrid>
                        </TextWrapper>
                    </Column1>
                    <Padding>
                        <TrailerInfoDiv>
                            <PriceH3>{dailyRate}/day</PriceH3>
                            <OutlineContainer>
                                <LightText>
                                    Trailer rentals are done through the TrailerHub mobile app. Press the button below
                                    using your mobile device to view and rent this trailer using our mobile app.
                                </LightText>
                            </OutlineContainer>
                            <BigBtnWrapper>
                                <Button to={buttonLinkTo} smooth={true} duration={500} spy={true} exact='true'
                                >{buttonLabel}</Button>
                            </BigBtnWrapper>
                            <LightText>
                                By downloading our app you agree to our Terms of Service and Privacy Policy.
                            </LightText>
                            <br/>
                        </TrailerInfoDiv>
                    </Padding>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    )
}

export default TrailerContent