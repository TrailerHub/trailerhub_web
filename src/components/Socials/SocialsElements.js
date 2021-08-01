import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const SocialsContainer = styled.div`
    right: 0;
    position: absolute;
    z-index: 1001;
`

export const IconLink = styled(LinkR)`
    font-size: 1.6rem;
    z-index: 1002;
    opacity: 0.8;
    cursor: pointer;
    color: #000;
    display: flex;
    text-decoration: none;
    margin: 0 20px 20px 0;

    &:hover {
        transform: scale(1.06);
        transition: all 0.2s ease-in-out;
    }
`