import React, { useState } from 'react'
import { Button } from '../ButtonElements'
import { Column2, ImgWrap, InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BigBtnWrapper, ArrowForward, ArrowRight } from './InfoElements'

const InfoSection = ({ lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, alt, img, primary, dark, dark2, linkButton, buttonLinkTo }) => {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    };
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1 imgStart={imgStart}>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                {linkButton ?
                                    <BigBtnWrapper>
                                        <Button to={buttonLinkTo} smooth={true} duration={500} spy={true} exact='true' onMouseEnter={onHover} onMouseLeave={onHover
                                        } primary="true" dark="true"
                                        >{buttonLabel}{hover ? <ArrowForward style={{ transform: `rotate(90deg)` }} /> : <ArrowRight style={{ transform: `rotate(90deg)` }} />}</Button>
                                    </BigBtnWrapper> : null
                                }
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap imgStart={imgStart}>
                                <img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection