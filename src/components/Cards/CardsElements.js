import styled from 'styled-components'
import { trailerHubBlack } from '../../colors'
import { Link as LinkS } from 'react-scroll'

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 150px 10px;

    @media screen and (max-width: 768px) {
        padding: 60px 10px;
    }

    @media screen and (max-width: 480px) {
        padding: 40px 10px;
    }
`;

export const CardsWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 20px;
    padding-top: 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 30px 20px;
    }
`;

export const CardsCard = styled(LinkS)`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 16px;
    //max-height: 340px;
    padding: 40px;
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);

    &:hover {
        transform: scale(1.03);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const CardsIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 40px;
`;

export const CardsH1 = styled.h1`
    font-size: 2.5rem;
    color: ${trailerHubBlack};
    margin-bottom: 10px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const CardsH2 = styled.h2`
    font-size: 1.3rem;
    font-weight: 500;
    margin-bottom: 10px;
`;

export const CardsP = styled.p`
    font-size: 1.03rem;
    line-height: 1.5rem;
    text-align: center;
`;