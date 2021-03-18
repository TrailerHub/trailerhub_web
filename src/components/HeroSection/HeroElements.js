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

export const HeroBg = styled.div`
    z-index: 1;
    position: absolute;
    /* width: 1070px; */
    width: 70%;
    height: 400px;
    right: 0;
    top: 0px;
    border-radius: 0 0 0 102px;
    overflow: hidden;
    clip-path: stroke-box;
    background: linear-gradient(104.2deg, #54AEF0 -26.26%, #60E783 123.52%);
    /* transform: skew(30deg, 0deg); */
    clip-path: polygon(0 0, 100% 0, 100% 100%, 40% 100%);
    
    border-radius: 0 0 0 102px;
    /* TODO add smaller widh and height for screens here */
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
        padding: 0 20px 0 50px;
    }
`

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Image = styled.img`
    width: 40%;

    @media screen and (max-width: 900px) {
        width: 60%;
    }
`

export const HeroContent = styled.div`
    z-index: 3;
    padding: 8px 100px 8px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media screen and (max-width: 768px) {
        padding: 8px 50px 8px 0;
    }

    @media screen and (max-width: 480px) {
        padding: 8px 50px 8px 0;
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
        font-size: 1rem
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
        font-size: 0.5rem;
    }
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 30px;
`;
