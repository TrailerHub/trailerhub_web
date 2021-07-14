import styled from 'styled-components'
import { trailerHubBlack } from '../../colors';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 150px;
    width: 100%;

    @media screen and (max-width: 800px) {
        padding: 150px 50px;
    }
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

    @media screen and (max-width: 1450px) {
        color:  ${trailerHubBlack};
    }

    @media screen and (max-width: 800px) {
        font-size: 2rem;
        text-align: center;
    }
`;

export const SubHeading = styled.h2`
    margin-bottom: 20px;
    font-size: 1.1rem;
    font-weight: 300;
    color: #fff;
    width: 60%;
    line-height: 1.5rem;

    @media screen and (max-width: 1450px) {
        color:  ${trailerHubBlack};
    }

    @media screen and (max-width: 800px) {
        text-align: center;
    }
`;

export const Grid = styled.div`
    display: grid;
    width: 100%;
    justify-content: space-between;
    align-content: center;
    gap: 20px;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 50px;

    @media screen and (max-width: 1300px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`

export const CenterFlex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`