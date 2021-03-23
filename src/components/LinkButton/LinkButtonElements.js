import styled from 'styled-components'
import { MdArrowForward } from 'react-icons/md'
import { trailerHubBlack, trailerHubGreen } from '../../colors'

export const LinkButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem 0 0;
    font-size: 1.2rem;
    color: ${trailerHubGreen};
    transition: all 0.2s ease-in-out;

    &:hover {
        color: ${trailerHubBlack};
    }

    @media screen and (max-width: 900px) {
        color: ${trailerHubBlack};
    }
`

export const LinkText = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 100%;
    cursor: pointer;
    font-weight: 400;
    padding-right: 20px;
`;

export const ArrowForward = styled(MdArrowForward)`
    
`;
