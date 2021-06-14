import React from 'react'
import { Container, Heading, SubHeading, InfoGrid, SubText, HR, Center } from './InfoContainerElements';

const InfoContainer = ({ info }) => {
    return (
        <div id="info">
            <Container>
                <div>
                    <Heading>Additional Information</Heading>
                    <Center>
                        <HR />
                    </Center>
                    <InfoGrid singleGrid={info.length > 1 ? false : true}>
                        {info && <>
                            {info.map((sec, index) => (
                                <div key={index}>
                                    <div>
                                        <div>
                                            <SubHeading>{sec.headline}</SubHeading>
                                            <SubText>{sec.body}</SubText>
                                        </div>
                                        <div>
                                            <SubHeading>{sec.headline2}</SubHeading>
                                            <SubText>{sec.body2}</SubText>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>}
                    </InfoGrid>
                </div>
            </Container>
        </div>
    )
}

export default InfoContainer;