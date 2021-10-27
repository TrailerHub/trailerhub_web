import styled from 'styled-components'
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { trailerHubGreen, } from '../../colors'

export const Slider = styled.section`
    position: relative;
    margin: 20vh 0 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Image = styled.img`
    width: 100%;
    overflow: hidden;
`

export const ImgCount = styled.p`
    position: absolute;
    top: 110%;
    color: lightgray;
`

export const RightArrow = styled(FiArrowRight)`
    position: absolute;
    top: 50%;
    right: 32px;
    font-size: 2.5rem;
    color: ${trailerHubGreen};
    z-index: 10;
    cursor: pointer;
    user-select: none;

    @media screen and (max-width: 930px) {
        color: #000;
    }

    @media screen and (max-width: 500px) {
        top: 110%;
    }
`

export const LeftArrow = styled(FiArrowLeft)`
    position: absolute;
    top: 50%;
    left: 32px;
    font-size: 2.5rem;
    color: ${trailerHubGreen};
    z-index: 10;
    cursor: pointer;
    user-select: none;

    @media screen and (max-width: 930px) {
        color: #000;
    }

    @media screen and (max-width: 500px) {
        top: 110%;
    }
`
export const Slide = styled.div`
    display: ${({ isActive }) => isActive ? 'flex' : 'none'};
    //width: 100%;
    justify-content: center;
    align-items: center;
    opacity: ${({ isActive }) => isActive ? '1' : '0'};
    transition-duration: ${({ isActive }) => isActive ? '0.5s' : '0.5s ease'};
    transform: ${({ isActive }) => isActive ? 'scale(1.08)' : 'null'};
`
