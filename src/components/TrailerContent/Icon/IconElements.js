import styled from 'styled-components'

export const IconWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media screen and (max-width: 600px) {
        justify-content: center;
    }
`;

export const Text = styled.p`
    font-size: 1rem;
    margin: 10px;
    font-family: 'Open Sans', sans-serif;
    color: gray;
`;