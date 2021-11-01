import styled from 'styled-components'
import { trailerHubBlack, } from '../../colors';
import { MdArrowForward } from 'react-icons/md'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 150px 150px 50px;
    background: linear-gradient(104.2deg, #54AEF0 -26.26%, #60E783 123.52%);

    @media screen and (max-width: 1000px) {
        padding: 150px 50px 50px;
    }

    @media screen and (max-width: 500px) {
        padding: 150px 10px 50px;
    }
`;

export const WhiteInnerContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 150px 100px 0px;
    // @media screen and (max-width: 1000px) {
    //     padding: 100px 50px;
    // }
    // @media screen and (max-width: 500px) {
    //     padding: 100px 10px;
    // }
`;

export const CenterFlex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const P = styled.p`
    margin-bottom: 20px;
    font-size: 1.1rem;
    font-weight: 300;
    color:  ${trailerHubBlack};
    width: 80%;
    line-height: 1.5rem;
    @media screen and (max-width: 800px) {
        text-align: center;
    }
`;

export const Heading = styled.h1`
    margin-bottom: 15px;
    font-size: 2.1rem;
    line-height: 1.1;
    font-weight: 600;
    color:  #fff;

    @media screen and (max-width: 1250px) {
        font-size: 2.3rem;
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

    @media screen and (max-width: 800px) {
        text-align: center;
    }
`

export const DownArrow = styled(MdArrowForward)`
    font-size: 30px;
    transform: rotate(90deg);
    color: rgba(255, 255, 255, 0.3);
`;

export const ArrowContainer = styled.div`
    padding: 40px 0 0;
`
