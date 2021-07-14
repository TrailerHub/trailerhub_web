import styled from 'styled-components'
import { MdArrowForward } from 'react-icons/md'
import { trailerHubBlack } from '../../colors';

export const HeaderContainer = styled.div`
    display: flex;
    background: linear-gradient(104.2deg, #54AEF0 -26.26%, #60E783 123.52%);
    justify-content: center;
    text-align: center;
    padding: 160px 150px 0;
`;

export const TextWrapper = styled.div`
    max-width: 580px;
    padding-bottom: 60px;

    @media screen and (max-width: 260px) {
        max-width: 320px;
        text-align: center;
    }
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 2.6rem;
    line-height: 1.1;
    font-weight: 600;
    color: #fff;

    @media screen and (max-width: 1200px) {
        font-size: 2.3rem;
    }

    @media screen and (max-width: 800px) {
        font-size: 2rem;
        text-align: center;
    }
`;

export const SubText = styled.h2`
    margin-bottom: 20px;
    font-size: 1.1rem;
    font-weight: 300;
    color: #fff;
    line-height: 1.5rem;

    @media screen and (max-width: 1300px) {
        color:  ${trailerHubBlack};
    }

    @media screen and (max-width: 800px) {
        text-align: center;
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