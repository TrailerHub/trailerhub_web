import styled from 'styled-components'
import { trailerHubBlack } from '../../colors';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 130px 150px;
    background: linear-gradient(104.2deg, #54AEF0 -26.26%, #60E783 123.52%);
`;

export const WhiteMiddleContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 30px 150px;
    // background: linear-gradient(104.2deg, #fff -26.26%, #60E783 123.52%);
`;

export const BulletListContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: left;
    padding: 30px 0px;
`;

// export const SubBulletList = styled.li`
//     display: flex;
//     justify-content: center;
//     text-align: left;
//     padding: 30px 0px;
// `;

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
    font-weight: 500;
    line-height: 24px;
    color: #fff;
    `;
