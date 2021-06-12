import styled from 'styled-components'
import { trailerHubBlack } from '../../colors'
import { Link as LinkS } from 'react-scroll'

export const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const RadioButton = styled(LinkS)`
    border-radius: 12px;
    background: ${({isSelected}) => (isSelected ? trailerHubBlack : 'transparent')};
    white-space: nowrap;
    padding: 12px 30px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:focus {
        transform: scale(1.05);
    }
`