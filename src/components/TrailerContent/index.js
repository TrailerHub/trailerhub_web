import React, { useState } from 'react'
import { FullWidth, Padding, IconTextContainer, SmallText, LightText, OutlineContainer, IconGrid, TrailerInfoDiv, PriceH3, Button, InfoContainer, HR, ButtonsWrapper, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BigBtnWrapper } from './TrailerContentElements'
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
                                <FullWidth>
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
                                </FullWidth>
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
                                    </svg>} title={`${axles} axles`} />
                                    <Icon icon={<svg width="41" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5484 0C14.4438 0 13.5484 0.895431 13.5484 2V2.51123C5.65515 5.30109 0 12.8288 0 21.6774C0 32.9013 9.09873 42 20.3226 42C31.5464 42 40.6452 32.9013 40.6452 21.6774C40.6452 13.3439 35.6292 6.18186 28.4516 3.04586V2C28.4516 0.89543 27.5562 0 26.4516 0H15.5484ZM20.3226 14.9032C22.5674 14.9032 24.3871 13.0835 24.3871 10.8387C24.3871 8.59395 22.5674 6.7742 20.3226 6.7742C18.0778 6.7742 16.2581 8.59395 16.2581 10.8387C16.2581 13.0835 18.0778 14.9032 20.3226 14.9032ZM24.3871 21.6774C24.3871 23.9222 22.5674 25.7419 20.3226 25.7419C18.0778 25.7419 16.2581 23.9222 16.2581 21.6774C16.2581 19.4327 18.0778 17.6129 20.3226 17.6129C22.5674 17.6129 24.3871 19.4327 24.3871 21.6774ZM31.1613 21.6774C33.4061 21.6774 35.2258 19.8577 35.2258 17.6129C35.2258 15.3681 33.4061 13.5484 31.1613 13.5484C28.9165 13.5484 27.0968 15.3681 27.0968 17.6129C27.0968 19.8577 28.9165 21.6774 31.1613 21.6774ZM16.2581 31.1613C16.2581 33.4061 14.4383 35.2258 12.1935 35.2258C9.94878 35.2258 8.12903 33.4061 8.12903 31.1613C8.12903 28.9165 9.94878 27.0968 12.1935 27.0968C14.4383 27.0968 16.2581 28.9165 16.2581 31.1613ZM28.4516 35.2258C30.6964 35.2258 32.5161 33.4061 32.5161 31.1613C32.5161 28.9165 30.6964 27.0968 28.4516 27.0968C26.2068 27.0968 24.3871 28.9165 24.3871 31.1613C24.3871 33.4061 26.2068 35.2258 28.4516 35.2258ZM13.5484 17.6129C13.5484 19.8577 11.7286 21.6774 9.48387 21.6774C7.2391 21.6774 5.41935 19.8577 5.41935 17.6129C5.41935 15.3681 7.2391 13.5484 9.48387 13.5484C11.7286 13.5484 13.5484 15.3681 13.5484 17.6129Z" fill="black" />
                                    </svg>

                                    } title={connector} />
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