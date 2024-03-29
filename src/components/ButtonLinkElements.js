import styled from 'styled-components'
import { trailerHubBlack, trailerHubGreen } from '../colors'
import { Link as LinkR } from 'react-router-dom'

export const ButtonLink = styled(LinkR)`
    border-radius: 12px;
    background: #373737;
    white-space: nowrap;
    padding: ${({big}) => (big ? '12px 30px' : '12px 30px')};
    color: #fff;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    text-decoration: none;
    display:inline-block;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.05);
        color: #fff;
        transition: all 0.2s ease-in-out;
        background: ${trailerHubGreen};
        /* color: ${({dark}) => (dark ? '#1b1b1b' : '#fff')}; */
    }

    @media screen and (max-width: 480px) {
        &:hover {
            background: ${trailerHubBlack};
        }
    }
`