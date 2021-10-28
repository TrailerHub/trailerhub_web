import React, { useState } from 'react'
import { Padding, IconTextContainer, SmallText, LightText, OutlineContainer, IconGrid, TrailerInfoDiv, PriceH3, Button, InfoContainer, HR, ButtonsWrapper, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BigBtnWrapper } from './TrailerContentElements'
import { FaWeightHanging } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import { GoPlug } from 'react-icons/go'
import { AiFillStar } from 'react-icons/ai'
import Icon from './Icon'
import { IconContext } from "react-icons";

const TrailerContent = ({ topLine, headline, description, buttonLinkTo, buttonLabel, dailyRate, location, rating, gvwr, axles, connector, hitch }) => {
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
                                <IconContext.Provider value={{ size: '2rem' }}>
                                    <Icon icon={<FaWeightHanging />} title={`${gvwr} gvwr`} />
                                    <Icon icon={<svg width="55" height="22" viewBox="0 0 55 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 3C0 1.34314 1.34314 0 3 0H9C10.6569 0 12 1.34314 12 3V10H21C21 8.89542 21.8954 8 23 8H24.6713C25.4442 7.3746 26.4283 7 27.5 7C28.5717 7 29.5558 7.3746 30.3287 8H32C33.1046 8 34 8.89542 34 10H43V3C43 1.34314 44.3431 0 46 0H52C53.6569 0 55 1.34314 55 3V19C55 20.6569 53.6569 22 52 22H46C44.3431 22 43 20.6569 43 19V13H34C34 14.1046 33.1046 15 32 15H30.3287C29.5558 15.6254 28.5717 16 27.5 16C26.4283 16 25.4442 15.6254 24.6713 15H23C21.8954 15 21 14.1046 21 13H12V19C12 20.6569 10.6569 22 9 22H3C1.34314 22 0 20.6569 0 19V3Z" fill="#090909" />
                                    </svg>} title={axles} />
                                    <IconContext.Provider value={{ size: '3rem' }}>
                                    <Icon icon={<GoPlug />} title={connector} />
                                    </IconContext.Provider>
                                    <Icon icon={<svg width="28" height="37" viewBox="0 0 28 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M28 13.5859C28 19.1346 24.6736 23.9064 19.9063 26.016L19.9062 29.4844C20.8641 29.4844 21.6406 30.2609 21.6406 31.2187C21.6406 32.1766 20.8641 32.9531 19.9062 32.9531L19.9063 34C19.9063 35.6568 18.5631 37 16.9063 37H12.5C10.8432 37 9.50001 35.6568 9.50001 34L9.5 32.9531C8.54213 32.9531 7.76562 32.1766 7.76562 31.2187C7.76562 30.2609 8.54213 29.4844 9.5 29.4844L9.50001 26.2559C4.42556 24.2864 0.828125 19.3563 0.828125 13.5859C0.828125 6.08263 6.91076 0 14.4141 0C21.9174 0 28 6.08263 28 13.5859Z" fill="black" />
                                    </svg>
                                    } title={hitch} />
                                </IconContext.Provider>
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
                                <Button href={buttonLinkTo} target="_blank"
                                >{buttonLabel}</Button>
                            </BigBtnWrapper>
                            <LightText>
                                By downloading our app you agree to our Terms of Service and Privacy Policy.
                            </LightText>
                            <br />
                        </TrailerInfoDiv>
                    </Padding>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    )
}

export default TrailerContent