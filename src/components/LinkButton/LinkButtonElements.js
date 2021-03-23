import styled from 'styled-components'
import { MdArrowForward } from 'react-icons/md'
import { trailerHubBlack, trailerHubGreen } from '../../colors'

export const LinkButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    padding: 0 1rem 0 0;
    font-size: 1.1rem;
    color: ${trailerHubGreen};
    transition: all 0.2s ease-in-out;

    &:hover {
        color: ${trailerHubBlack};
    }

    @media screen and (max-width: 900px) {
        color: ${({dark}) => (dark ? `${trailerHubBlack}` : `${trailerHubGreen}`)};
        justify-content: center;
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
