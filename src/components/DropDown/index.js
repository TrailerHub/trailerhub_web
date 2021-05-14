import { DropDownContainer, DropDownWrapper, BodyP, TitleH1, ContentWrapper } from "./DropDownElements"

const DropDown = ({ isActive }) => {
    return (
        <DropDownContainer isActive={isActive}>
            <DropDownWrapper>
                <ContentWrapper>
                    <TitleH1>Support</TitleH1>
                    <BodyP>(888) - 777 - 9423</BodyP>
                    <BodyP>support@trailerhub.io</BodyP>
                    <TitleH1>Business</TitleH1>
                    <BodyP>(210) - 251 - 6672</BodyP>
                    <BodyP>prod@trailerhub.io</BodyP>
                </ContentWrapper>
            </DropDownWrapper>
        </DropDownContainer>
    )
}

export default DropDown
