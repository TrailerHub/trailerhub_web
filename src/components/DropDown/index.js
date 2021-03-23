import { DropDownContainer, DropDownWrapper, CardsP } from "./DropDownElements"

const DropDown = ({ isActive }) => {
    return (
        <DropDownContainer isActive={isActive}>
            <DropDownWrapper>
                <CardsP>hi</CardsP>
            </DropDownWrapper>
        </DropDownContainer>
    )
}

export default DropDown
