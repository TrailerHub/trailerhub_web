import styled from 'styled-components'

export const DropDownContainer = styled.div`
    position: absolute;
    top: 70px;
    right: 0;
    opacity: ${({isActive}) => isActive ? '1' : '0'};
    visibility: ${({isActive}) => isActive ? 'visible' : 'hidden'};
    transform: ${({isActive}) => isActive ? 'translateY(0)' : 'translateY(-20px)'};
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
    @media screen and (max-width: 900px) {
        display: none;
    }
`

export const DropDownWrapper = styled.div`
    background-color: #fff;
    border-radius: 14px;
    width: 300px;
    height: 100px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
`

export const CardsP = styled.p`
    font-size: 1.03rem;
    line-height: 1.5rem;
    text-align: center;
    color: #000;
`;