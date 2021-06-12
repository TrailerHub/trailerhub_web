import styled from 'styled-components'
import { MdArrowForward } from 'react-icons/md'

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

export const SubText = styled.p`
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: #fff;

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