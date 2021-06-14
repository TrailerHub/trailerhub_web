import styled from 'styled-components'
import { MdArrowForward } from 'react-icons/md'
import { trailerHubBlack, trailerHubGreen } from '../../colors';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 100px 150px 160px;
`;

export const Heading = styled.h1`
    font-size: 2.6rem;
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

export const SubHeading = styled.h2`
    margin-bottom: 20px;
    font-size: 1.2rem;
    font-weight: 500;
    color: ${trailerHubBlack};

    @media screen and (max-width: 1200px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 800px) {
        text-align: center;
    }
`;

export const InfoGrid = styled.div`
    //width: 60%;
    display: grid;
    justify-content: center;
    align-content: center;
    grid-template-columns: ${({ singleGrid }) => (singleGrid ? '1fr' : '1fr 1fr')};
    text-align: center;
    gap: 60px;

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`

export const SubText = styled.p`
    margin-bottom: 35px;
    font-size: 0.9rem;
    color: ${trailerHubBlack};
    opacity: 0.6;

    @media screen and (max-width: 480px) {
        font-size: 14px;
        line-height: 20px;
        padding: 0 10px;
    }
`;

export const ArrowContainer = styled.div`
    padding: 40px 0 0;
`

export const DownArrow = styled(MdArrowForward)`
    font-size: 30px;
    transform: rotate(90deg);
    color: rgba(255, 255, 255, 0.3);
`;

export const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`    

export const HR = styled.hr`
    color: ${trailerHubGreen};
    background-color: ${trailerHubGreen};
    height: 1px;
    border-width: 0;
    opacity: 0.3;
    width: 80%;
    margin: 80px 0;
    justify-self: center;
`