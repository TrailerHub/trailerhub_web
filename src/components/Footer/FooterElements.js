import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'
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
`;

export const LogoContainer = styled(LinkS)`
    display: flex;
    align-items: flex-start;
    text-decoration: none;
    padding: 10px;
`;

export const ContentContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    padding: 0 24px;
    grid-gap: 0;
    align-items: flex-start;
    justify-content: start;

    @media screen and (max-width: 480px) {
        padding: 0;
    }
`

export const ContactContentContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0;
    align-items: flex-start;
    justify-content: start;
`

export const FooterLink = styled(LinkS)`
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
    @media screen and (max-width: 768px) {
        width: 100%;
    }
    @media screen and (max-width: 480px) {
        width: 100%;
    }
`