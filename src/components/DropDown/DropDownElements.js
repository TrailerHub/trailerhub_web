import styled from 'styled-components'
import { trailerHubBlack, trailerHubGreen } from '../../colors'

export const DropDownContainer = styled.div`
    position: absolute;
    top: 70px;
    right: 0;
    opacity: ${({ isActive }) => isActive ? '1' : '0'};
    visibility: ${({ isActive }) => isActive ? 'visible' : 'hidden'};
    transform: ${({ isActive }) => isActive ? 'translateY(0)' : 'translateY(-20px)'};
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
    @media screen and (max-width: 900px) {
        display: none;
    }
`

export const DropDownWrapper = styled.div`
    background-color: #fff;
    border-radius: 14px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
`

export const ContentWrapper = styled.div`
    padding: 10px 90px 20px 20px;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    white-space: nowrap;
`

export const TitleH1 = styled.h1`
    font-size: 1.2rem;
    font-weight: 500;
    color: ${trailerHubGreen};
    margin: 10px 0;
`

export const BodyP = styled.p`
    font-size: 1rem;
    line-height: 1.5rem;
    color: ${trailerHubBlack};
`