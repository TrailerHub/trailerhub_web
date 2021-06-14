import styled from 'styled-components'
import { trailerHubBlack } from '../../colors';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 130px 100px;
`;

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