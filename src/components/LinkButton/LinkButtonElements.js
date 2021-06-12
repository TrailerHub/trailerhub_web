import styled from 'styled-components'
import { MdArrowForward } from 'react-icons/md'
import { trailerHubBlack, trailerHubGreen } from '../../colors'

export const LinkButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    padding: 0 1rem 0 0;
    font-size: 1.1rem;
    transition: all 0.2s ease-in-out;
    color: ${({black}) => (black ? trailerHubBlack : trailerHubGreen)};

    @media screen and (max-width: 800px) {
        justify-content: center;
    }
`

export const LinkText = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 100%;
    cursor: pointer;
    color: ${({black}) => (black ? trailerHubBlack : trailerHubGreen)};
    font-weight: 400;
    padding-right: 20px;
`;

export const ArrowForward = styled(MdArrowForward)`
    color: ${({black}) => (black ? trailerHubBlack : trailerHubGreen)};
`;
