import styled from 'styled-components'
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'

export const HeroContainer = styled.div`
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 800px;
    position: relative;
    z-index: 1;
`;

export const HeroBg = styled.img`
    z-index: 1;
    position: absolute;
    width: 75%;
    right: 0;
    top: 0;
    padding: 0;

    @media screen and (max-width: 1100px) {
        width: 90%;
    }

    @media screen and (max-width: 800px) {
        width: 200%;
    }

    @media screen and (max-width: 480px) {
        width: 400%;
    }

    
`;

export const HeroWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 50px 0 140px;
    z-index: 1000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 2000px) {
        padding: 0 90px 0 200px;
    }

    @media screen and (max-width: 800px) {
        padding: 0 20px;
        grid-template-columns: 1fr;
    }
`

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Image = styled.img`
    width: 30%;

    @media screen and (max-width: 1440px) {
        width: 40%;
    }
    @media screen and (max-width: 1200px) {
        width: 50%;
    }
    @media screen and (max-width: 800px) {
        width: 30%;
    }
`

export const HeroContent = styled.div`
    z-index: 3;
    padding: 8px 100px 8px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media screen and (max-width: 950px) {
        padding: 8px 50px 8px 0;
    }

    @media screen and (max-width: 800px) {
        padding: 100px 20px 50px;
        align-items: center;
    }
`;

export const HeroH1 = styled.div`
    color: #373737;
    font-size: 4rem;
    text-align: left;
    line-height: 4.4rem;
    font-weight: 500;

    @media screen and (max-width: 800px) {
        font-size: 2rem;
    }

    @media screen and (max-width: 800px) {
        text-align: center;
    }
`;

export const HeroP = styled.div`
    margin-top: 20px;
    color: #373737;
    font-size: 1.2rem;
    font-weight: 200;
    line-height: 1.6rem;
    text-align: left;
    max-width: 600px;

    /* @media screen and (max-width: 768px) {
        font-size: 1rem;
    } */

    @media screen and (max-width: 800px) {
        text-align: center;
        line-height: 1.5rem;
    }
`;

export const ButtonsWrapper = styled.div`
    margin-top: 32px;
    display: grid;
    grid-column-gap: 0;
    align-items: center;
    grid-template-columns: 1fr 0.5fr 0.5fr;
    grid-gap: 0;

    @media screen and (max-width: 900px) {
        grid-template-columns: 1fr;
        grid-row-gap: 10px;
    }
`

export const HeroBtnWrapper = styled.div`
    display: flex;
    margin-right: 2rem;

    @media screen and (max-width: 620px) {
        justify-content: center;
        margin-top: 15px;
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
