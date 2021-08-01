import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const SocialsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1001;
`

export const IconLink = styled(LinkR)`
    font-size: 1.8rem;
    z-index: 1002;
    opacity: 0.8;
    cursor: pointer;
    display: flex;
    text-decoration: none;
    margin: 0 50px;

    &:hover {
        transform: scale(1.06);
        transition: all 0.2s ease-in-out;
    }

    @media screen and (max-width: 810px) {
        margin: 150px 20px;
    }
`