import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { trailerHubBlack, trailerHubGreen, trailerHubGrey } from '../../colors'

export const FooterWrapper = styled.div`
    background-color: #fff;
    border-top: 1px solid ${trailerHubGrey};
`

export const FooterContainer = styled.footer`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 48px 24px;
    justify-items: center;

    @media screen and (max-width: 565px) {
        grid-template-columns: 1fr;
    }
`;

export const LogoContainer = styled(LinkR)`
    display: flex;
    align-items: flex-start;
    text-decoration: none;
    padding: 10px;
    width: 70%;
    
    @media screen and (max-width: 565px) {
        padding: 0;
        align-items: center;
        justify-content: center;
        margin-bottom: 30px;
    }
`;

export const ContentContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    padding: 0 24px;
    grid-gap: 0;
    align-items: flex-start;
    justify-content: start;

    @media screen and (max-width: 565px) {
        padding: 0;
        align-items: center;
        text-align: center;
    }
`

export const FlexWrap = styled.div`
    display: contents;

    @media screen and (max-width: 565px) {
        display:flex;
        align-items: center;
        justify-content: center;
    }
`

export const ContactContentContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0;
    

    @media screen and (max-width: 565px) {
        justify-content: center;
        align-items: center;
    }
`

export const FooterLink = styled(LinkR)`
    color: #afafaf;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    padding: 2px 0;
    cursor: pointer;

    &:hover {
        color: ${trailerHubGreen};
        transition: 0.3s ease-out;
    }

    @media screen and (max-width: 480px) {
        font-size: 0.7rem;
    }
`;

export const FooterSubHeading = styled.p`
    color: ${trailerHubBlack};
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    font-weight: 600;
    padding: 10px 0;

    @media screen and (max-width: 480px) {
        font-size: 0.7rem;
    }
`;

export const FooterNoLink = styled.p`
    color: #afafaf;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    padding: 2px 0;

    @media screen and (max-width: 480px) {
        font-size: 0.7rem;
    }
`;

export const CopyTermsPolicyContainer = styled.div`
    display: flex;
    
    @media screen and (max-width: 565px) {
        align-items: center;
        justify-content: center;
    }
`

export const CopyTermsLink = styled(LinkR)`
    color: ${trailerHubGreen};
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 0.7rem;
    padding: 10px;
    align-self: flex-end;

    &:hover {
        color: ${trailerHubBlack};
        transition: 0.3s ease-out;
    }
`

export const CopyRightText = styled.p`
    color: #afafaf;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 0.7rem;
    padding: 10px;
    align-self: flex-end;
`;

export const LogoImage = styled.img`
    width: 70%;
    cursor: pointer;
    /* @media screen and (max-width: 768px) {
        width: 100%;
    }
    @media screen and (max-width: 480px) {
        width: 100%;
    } */
`