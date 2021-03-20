import styled from 'styled-components'

export const HeroContainer = styled.div`
    background: #fafafa;
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
    height: 60%;
    right: 0;
    top: 0;
    padding: 0;

    @media screen and (max-width: 1600px) {
        height: 50%;
    }

    @media screen and (max-width: 480px) {
        height: 50%;
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

    @media screen and (max-width: 768px) {
        padding: 0 20px 0 50px;
    }

    @media screen and (max-width: 480px) {
        padding: 0 20px 0 20px;
        grid-template-columns: 1fr;
    }
`

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Image = styled.img`
    width: 35%;

    @media screen and (max-width: 1200px) {
        width: 50%;
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

    @media screen and (max-width: 480px) {
        padding: 100px 20px 50px;
        align-items: center;
    }
`;

export const HeroH1 = styled.div`
    color: #373737;
    font-size: 4.2rem;
    text-align: left;
    font-weight: 500;

    @media screen and (max-width: 768px) {
        font-size: 2rem;
    }

    @media screen and (max-width: 480px) {
        text-align: center;
    }
`;

export const HeroP = styled.div`
    margin-top: 20px;
    color: #373737;
    font-size: 1.2rem;
    font-weight: 200;
    line-height: 2rem;
    text-align: left;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 480px) {
        text-align: center;
    }
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 30px;

    @media screen and (max-width: 480px) {
        margin-top: 15px;
    }
`;
