import styled from 'styled-components'
import { trailerHubGrey, trailerHubBlack, trailerHubGreen } from '../../colors'

export const InfoContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const TrailerInfoDiv = styled.div`
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1000px) {
        width: 70%;
    }
    @media screen and (max-width: 600px) {
        width: 70%;
    }
`

export const InfoWrapper = styled.div`
    display: flex;
    width: 100%;
    padding: 50px 200px;
    justify-content: center;

    @media screen and (max-width: 1000px) {
        padding: 0;
        align-items: center;
    }
`;

export const InfoRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;

    @media screen and (max-width: 1000px) {
        display: grid;
        text-align: center;
        align-items: center;
        justify-content: center;
        grid-template-areas: 'col1' 'col2';
    }
`;

export const Column1 = styled.div`
    display: flex;
    flex: 90%;
    justify-content: flex-start;
    grid-area: 'col1';
    margin-right: 50px;

    @media screen and (max-width: 1000px) {
        text-align: center;
        justify-content: center;
        margin-right: 0;
        flex: 1;
    }
`;

export const Column2 = styled.div`
    display: flex;
    grid-area: col2;
    justify-content: flex-start;
`;

export const TextWrapper = styled.div`
    max-width: 580px;
    padding-bottom: 60px;

    @media screen and (max-width: 800px) {
        text-align: center;
    }

    @media screen and (max-width: 260px) {
        max-width: 320px;
        text-align: center;
    }
`;

export const TopLine = styled.p`
    color: ${trailerHubGreen};
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-bottom: 10px;
    font-size: 2rem;
    line-height: 1.1;
    font-weight: 600;
    color: ${trailerHubBlack};

    @media screen and (max-width: 1200px) {
        font-size: 2.3rem;
    }

    @media screen and (max-width: 800px) {
        font-size: 2rem;
        text-align: center;
    }
`;

export const PriceH3 = styled.h3`
    margin-bottom: 10px;
    font-size: 1.8rem;
    line-height: 1.1;
    font-weight: 500;
    color: ${trailerHubBlack};

    @media screen and (max-width: 1200px) {
        font-size: 1.6rem;
    }

    @media screen and (max-width: 800px) {
        font-size: 1.3rem;
        text-align: center;
    }
`;

export const Subtitle = styled.p`
    font-size: 16px;
    line-height: 24px;
    color: gray;
    font-family: 'Open Sans', sans-serif;

    @media screen and (max-width: 480px) {
        font-size: 14px;
        line-height: 20px;
        padding: 0 10px;
    }
`;

export const ButtonsWrapper = styled.div`
    margin-top: 32px;
    width: 70%;
    display: grid;
    grid-column-gap: 0;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 0;

    @media screen and (max-width: 900px) {
        grid-template-columns: 1fr;
        grid-row-gap: 10px;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
`

export const BigBtnWrapper = styled.div`
    display: flex;
    width: 100%;

    @media screen and (max-width: 800px) {
        justify-content: center;
    }

    @media screen and (max-width: 900px) {
        margin-right: 0;
    }
`;

export const Button = styled.a`
    border-radius: 12px;
    background: ${trailerHubGreen};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '12px 30px' : '12px 30px')};
    color: #fff;
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    width: 100%;
    margin: 0 0 10px;
    text-decoration: none;

    &:hover {
        transform: scale(1.05);
        color: #fff;
        transition: all 0.2s ease-in-out;
        background: ${trailerHubGreen};
    }

    @media screen and (max-width: 480px) {
        &:hover {
            background: ${trailerHubBlack};
        }
    }
`

export const HR = styled.hr`
    color: ${trailerHubGreen};
    background-color: ${trailerHubGreen};
    height: 1px;
    border-width: 0;
    opacity: 0.3;
    width: 100%;
    margin: 20px 0;
    justify-self: center;
`

export const IconGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: center;
    align-items: flex-start;
    gap: 25px;

    @media screen and (max-width: 600px) {
        grid-template-columns: 1fr 1fr;
        align-items: center;
    }
`;

export const Padding = styled.div`
    display: flex;
    flex: 30%;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1000px) {
        padding: 0 20px;
        flex: 1;
        width: 100%
    }
`

export const OutlineContainer = styled.div`
    outline: 1px solid lightgray;
    margin: 30px 0;
    padding: 20px 10px;
    border-radius: 10px;
`
export const LightText = styled.p`
    color: lightgray;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
`;

export const SmallText = styled.p`
    color: gray;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
`

export const IconTextContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const FullWidth = styled.div`
display: flex;
justify-content: space-between;
    width: 100%;
`;