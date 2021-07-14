import React, { useState } from 'react'
import { faqData } from '../../content/FAQData';
import Contact from '../Contact';
import { Container, Heading, SubHeading, CenterFlex, SubText, FAQCardContainer, H3, ExpandedContainer, InfoContainer, FAQContainer } from './FAQSectionElements';

const FAQSection = () => {
    const [expandedId, setExpandedId] = useState(null);

    const setNewExpandedId = (id) => {
        expandedId === id ? setExpandedId(null) : setExpandedId(id);
    }

    return (
        <div id="faq">
            <Container>
                <div>
                    <Heading>Frequently Asked Questions</Heading>
                    <CenterFlex><SubHeading>If you have any questions that aren't on this page, contact us using the form below!</SubHeading></CenterFlex>
                    {faqData && <FAQContainer>
                        {faqData.map((faq) => (
                            <div key={faq.id} onClick={() => setNewExpandedId(faq.id)} role="button">
                                <FAQCardContainer>
                                    <InfoContainer>
                                        <H3>{faq.title}</H3>
                                        {expandedId === faq.id &&
                                            <ExpandedContainer>
                                                <SubText>{faq.body}</SubText>
                                            </ExpandedContainer>
                                        }
                                    </InfoContainer>
                                </FAQCardContainer>
                            </div>
                        ))}
                    </FAQContainer>}
                </div>
            </Container>
            <Contact light={true}/>
        </div>
    )
}

export default FAQSection;