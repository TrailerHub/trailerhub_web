import styled from 'styled-components'
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'
import { trailerHubBlack, trailerHubGreen } from '../../colors'

export const InfoContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const InfoWrapper = styled.div`
    display: flex;
    width: 100%;
    padding: 150px 150px;
    justify-content: center;

    @media screen and (max-width: 2000px) {
        padding: 180px 200px;
    }

    @media screen and (max-width: 1200px) {
        padding: 150px 150px;
    }

    @media screen and (max-width: 768px) {
        padding: 90px 20px;
    }

    @media screen and (max-width: 480px) {
        padding: 40px 10px;
    }
`;

export const InfoRow = styled.div`
    display: grid;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1 col2'` : `'col1 col2' 'col2 col1'`)};
    }

    @media screen and (max-width: 800px) {
        text-align: center;
        justify-content: center;
        grid-template-areas: 'col1' 'col2';
    }
`;

export const Column1 = styled.div`
    display: flex;
    justify-content: ${({ imgStart }) => (imgStart ? 'flex-end' : 'flex-start')};
    grid-area: col1;

    @media screen and (max-width: 800px) {
        text-align: center;
        justify-content: center;
    }
`;

export const Column2 = styled.div`
    grid-area: col2;
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
    margin-bottom: 24px;
    font-size: 3rem;
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

export const Subtitle = styled.p`
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${trailerHubBlack};

    @media screen and (max-width: 480px) {
        font-size: 14px;
        line-height: 20px;
        padding: 0 10px;
    }
`;

export const ImgWrap = styled.div`
    display:flex;
    flex-direction: column;
    align-items: ${({ imgStart }) => (imgStart ? 'flex-start' : 'flex-end')};
    //justify-content: center;
    padding:  0 50px;

    @media screen and (max-width: 800px) {
        align-items: center;
        padding:  0;
    }
`;

export const InfoSectionImg = styled.img`
    width: 45%;

    @media screen and (max-width: 1440px) {
        width: 60%;
    }

    @media screen and (max-width: 800px) {
        width: 50%;
    }
`

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
    margin-right: 2rem;

    @media screen and (max-width: 800px) {
        justify-content: center;
    }

    @media screen and (max-width: 900px) {
        margin-right: 0;
    }
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;