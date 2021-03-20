import React from 'react'
import { CardsContainer, CardsH1, CardsWrapper, CardsCard, CardsIcon, CardsH2, CardsP } from './CardsElements'

const Cards = () => {
    return (
        <CardsContainer id='about'>
            <CardsH1>Options</CardsH1>
            <CardsP>This project was made with blah using blah and does blah</CardsP>
            <CardsWrapper> 
                <CardsCard to='rent' smooth={true} duration={500} spy={true} exact='true'>
                    <CardsIcon src="/images/rent.svg" alt="space"/>
                    <CardsH2>Renting</CardsH2>
                    <CardsP>This project was made with blah using blah and does blah</CardsP>
                </CardsCard>
                <CardsCard to='host' smooth={true} duration={500} spy={true} exact='true'>
                    <CardsIcon src="/images/host.svg" alt="space"/>
                    <CardsH2>Hosting</CardsH2>
                    <CardsP>This project was made with blah using blah and does blah</CardsP>
                </CardsCard>
                <CardsCard to='business' smooth={true} duration={500} spy={true} exact='true'>
                    <CardsIcon src="/images/business.svg" alt="space"/>
                    <CardsH2>Business</CardsH2>
                    <CardsP>This project was made with blah using blah and does blah</CardsP>
                </CardsCard>
            </CardsWrapper>
        </CardsContainer>
    )
}

export default Cards