import styled from 'styled-components'
import { trailerHubBlack } from '../../colors';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 130px 100px;
    background: linear-gradient(104.2deg, #54AEF0 -26.26%, #60E783 123.52%);
`;

export const FAQContainer = styled.div`
    padding: 30px 0;
    width: 700px;

    @media screen and (max-width: 900px) {
        width: 500px;
    }

    @media screen and (max-width: 600px) {
        width: 300px;
    }

    @media screen and (max-width: 400px) {
        width: 200px;
    }
`;

export const ExpandedContainer = styled.div`
    padding-top: 10px;
`

export const Heading = styled.h1`
    margin-bottom: 15px;
    font-size: 2.3rem;
    line-height: 1.1;
    font-weight: 600;
    color:  #fff;

    @media screen and (max-width: 1250px) {
        font-size: 2.3rem;
    }

    @media screen and (max-width: 1150px) {
        color:  ${trailerHubBlack};
    }

    @media screen and (max-width: 800px) {
        font-size: 2rem;
        text-align: center;
    }
`;

export const SubHeading = styled.h2`
    margin-bottom: 20px;
    font-size: 1rem;
    font-weight: 300;
    color: #fff;

    @media screen and (max-width: 1150px) {
        color:  ${trailerHubBlack};
    }

    @media screen and (max-width: 800px) {
        text-align: center;
    }
`;

export const SubText = styled.p`
    font-size: 0.9rem;
    color: ${trailerHubBlack};
    opacity: 0.6;

    @media screen and (max-width: 480px) {
        font-size: 14px;
        line-height: 20px;
    }
`;

export const FAQCardContainer = styled.div`
    margin: 0 0 10px 0; 
    background: #fff;
    border-radius: 15px;
    padding: 20px;
    cursor: pointer;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    align-items: top;
    overflow: hidden;

    &:hover {
        transform: scale(1.01);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const InfoContainer = styled.div`
    text-align: left;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
`

export const H3 = styled.h3`
    font-size: 1rem;
    font-weight: 400;
    color: ${trailerHubBlack};
`