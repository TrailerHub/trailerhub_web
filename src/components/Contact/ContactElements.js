import styled from 'styled-components'
import { trailerHubBlack } from '../../colors';

export const ComponentWrapper = styled.div`
    background: ${({ light }) => (light ? '#fff' : 'linear-gradient(104.2deg, #54AEF0 -26.26%, #60E783 123.52%)')};
    padding: 50px 150px;

    @media screen and (max-width: 700px) {
        padding: 50px 20px;
    }
`

export const ContactWrapper = styled.div`
    padding: 50px 250px;
    display: flex;
    justify-content: center;
    align-content: center;

    @media screen and (max-width: 1200px) {
        padding: 50px;
    }
`

export const LinkButtonsWrapper = styled.div`
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-content: center;
`

export const FlexCenter = styled.div`
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-content: center;
`

export const Form = styled.form`
    margin: 0;
    padding: 0;
    width: 100%;
`

export const GridWrapper = styled.div`
    display: grid;
    justify-content: space-between;
    align-content: center;
    gap: 10px;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`

export const TextInput = styled.input`
font-family: 'Ubuntu';
color: ${({ light }) => (light ? 'trailerHubBlack' : '#fff')};
width: 100%;
display: grid;
grid-template-columns: 1fr;
gap: 10px;
align-items: center;
justify-content: space-between;
padding: 15px;
border: 0.5px solid;
border-radius: 12px;
margin: 15px 0;
border-color: ${({ light }) => (light ? 'trailerHubBlack' : 'rgba(255, 255, 255, 0.8)')};
background-color: ${({ light }) => (light ? 'trailerHubBlack' : 'rgba(255, 255, 255, 0.3)')};

&::placeholder {
    color: ${({ light }) => (light ? 'trailerHubBlack' : '#fff')};
}

&:hover {
  box-shadow: 1px 1px 1px thistle;
}

&:focus {
  outline: none;
}
`;

export const TextArea = styled.textarea`
font-family: 'Ubuntu';
width: 100%;
display: grid;
grid-template-columns: 1fr;
gap: 10px;
align-items: center;
justify-content: space-between;
padding: 15px;
border: 0.5px solid;
border-radius: 14px;
margin: 5px 0;
border-color: ${({ light }) => (light ? 'trailerHubBlack' : 'rgba(255, 255, 255, 0.8)')};
background-color: ${({ light }) => (light ? 'trailerHubBlack' : 'rgba(255, 255, 255, 0.3)')};
color: ${({ light }) => (light ? 'trailerHubBlack' : '#fff')};

&::placeholder {
    color: ${({ light }) => (light ? 'trailerHubBlack' : '#fff')};
}

&:hover {
  box-shadow: 1px 1px 1px thistle;
}

&:focus {
  outline: none;
}
`

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SubmitButton = styled.input`
    border-radius: 12px;
    background: #373737;
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
    margin: 15px;

    &:hover {
        transform: scale(1.05);
        color: #000;
        transition: all 0.2s ease-in-out;
        background: #fff;
    }

    @media screen and (max-width: 480px) {
        &:hover {
            background: ${trailerHubBlack};
        }
    }
`
export const HeadingWrapper = styled.div`
    padding: 0 150px;
    display: flex;
    justify-content: center;
    align-content: center;

    @media screen and (max-width: 1200px) {
        padding:  0 50px;
    }
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 2.6rem;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ light }) => (light ? 'trailerHubBlack' : '#fff')};

    @media screen and (max-width: 1200px) {
        font-size: 2.3rem;
    }

    @media screen and (max-width: 800px) {
        font-size: 2rem;
        text-align: center;
    }
`;

export const ContactInfoText = styled.p`
    color: ${({ light }) => (light ? 'trailerHubBlack' : '#fff')};
    text-decoration: none;
    font-size: 1rem;

    @media screen and (max-width: 480px) {
        font-size: 0.8rem;
    }
`

export const ContactInfoTextLink = styled.a`
    color: ${({ light }) => (light ? 'trailerHubBlack' : '#fff')};
    text-decoration: none;
    font-size: 1rem;
    padding: 0;
    margin: 0;

    @media screen and (max-width: 480px) {
        font-size: 0.8rem;
    }
`

export const ContactInfoWrapper = styled.div`
    width: 60%;
    display: grid;
    justify-content: center;
    align-content: center;
    grid-template-columns: 1fr 1fr;
    text-align: center;

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`

export const Subtitle = styled.p`
    margin: 0 0 10px;
    font-size: 18px;
    color: white;
    font-family: 'Open Sans', sans-serif;
    text-align: center;
    width: 60%;
`;

export const HR = styled.hr`
    color: white;
    background-color: white;
    height: 1px;
    border-width: 0;
    opacity: 0.3;
    width: 80%;
    margin: 10px 0;
    justify-self: center;
`