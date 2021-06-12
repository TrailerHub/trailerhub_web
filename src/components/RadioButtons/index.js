import React from 'react'
import { ButtonsContainer, RadioButton } from './RadioButtonsElements'

const RadioButtons = ({ radioButton, toggleRentHostSteps }) => {
    return (
        <div>
            <ButtonsContainer>
                <RadioButton role="button" to="step1" isSelected={radioButton === true} onClick={() => toggleRentHostSteps(true)} smooth={true} duration={500} spy={true} exact='true'>Renting</RadioButton>
                <RadioButton role="button" to="step1" isSelected={radioButton === false} onClick={() => toggleRentHostSteps(false)} smooth={true} duration={500} spy={true} exact='true'>Hosting</RadioButton>
            </ButtonsContainer>
        </div>
    )
}

export default RadioButtons;