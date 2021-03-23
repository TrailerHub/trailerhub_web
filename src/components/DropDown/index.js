import { DropDownContainer, DropDownWrapper, BodyP, TitleH1, ContentWrapper } from "./DropDownElements"

const DropDown = ({ isActive }) => {
    return (
        <DropDownContainer isActive={isActive}>
            <DropDownWrapper>
                <ContentWrapper>
                    <TitleH1>Support</TitleH1>
                    <BodyP>(210) - 383 - 7022</BodyP>
                    <BodyP>(210) - 251 - 6672</BodyP>
                    <BodyP>support@trailerhub.io</BodyP>
                    <TitleH1>Business</TitleH1>
                    <BodyP>(210) - 383 - 7022</BodyP>
                    <BodyP>(210) - 251 - 6672</BodyP>
                    <BodyP>zoe@trailerhub.io</BodyP>
                    <BodyP>r.schmitt@trailerhub.io</BodyP>
                </ContentWrapper>
            </DropDownWrapper>
        </DropDownContainer>
    )
}

export default DropDown
