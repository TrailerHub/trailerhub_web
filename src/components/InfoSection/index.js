import React, { useState } from 'react'
import { Button } from '../ButtonElements'
import LinkButton from '../LinkButton';
import { Column2, ImgWrap, InfoContainer, InfoSectionImg, ButtonsWrapper, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BigBtnWrapper, ArrowForward, ArrowRight } from './InfoElements'

const InfoSection = ({ lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, alt, img, primary, dark, dark2, linkButton, buttonLinkTo, appLinks }) => {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    };
    return (
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1 imgStart={imgStart}>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <ButtonsWrapper>
                                {linkButton &&
                                    <BigBtnWrapper>
                                        <Button to={buttonLinkTo} smooth={true} duration={500} spy={true} exact='true' onMouseEnter={onHover} onMouseLeave={onHover
                                        } primary="true" dark="true"
                                        >{buttonLabel}{hover ? <ArrowForward style={{ transform: `rotate(90deg)` }} /> : <ArrowRight style={{ transform: `rotate(90deg)` }} />}</Button>
                                    </BigBtnWrapper>}
                                {appLinks && <><LinkButton label={'iPhone'} black={false} href={'https://apps.apple.com/us/app/trailerhub-rent-trailers/id1551725129'} />
                                    <LinkButton label={'Android'} black={false} href={'https://play.google.com/store/apps/details?id=io.trailerhub.trailerhub'} /> </>}
                            </ButtonsWrapper>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap imgStart={imgStart}>
                            <InfoSectionImg src={img} alt={alt} />
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    )
}

export default InfoSection