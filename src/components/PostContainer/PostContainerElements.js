import styled from 'styled-components'
import { trailerHubBlack, trailerHubGreen } from '../../colors'

export const Container = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 40px;
    text-align: left;
    text-decoration: none;
    color: ${trailerHubBlack};

    &:hover {
        transform: scale(1.03);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const Img = styled.img`
    width: 100%;
    margin-bottom: 20px;
    border-radius: 10px;
    object-fit: cover;
`;

export const H3 = styled.h1`
    font-size: 1.5rem;
    color: ${trailerHubBlack};
    margin-bottom: 5px;
`;

export const DescriptionP = styled.p`
    font-size: 1rem;
    line-height: 1.2rem;
    text-align: left;
    opacity: 0.5;
`;

export const AuthorText = styled.p`
    color: ${trailerHubGreen};
    font-size: 0.8rem;
    line-height: 0.8rem;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 5px;
`