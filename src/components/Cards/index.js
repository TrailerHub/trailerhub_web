import React from 'react'
import { CardsContainer, CardsH1, CardsWrapper, CardsCard, CardsIcon, CardsH2, CardsP } from './CardsElements'

const Cards = () => {
    return (
        <CardsContainer id='about'>
            <CardsH1>What you can do</CardsH1>
            <CardsP>Rent or host your trailers on TrailerHub</CardsP>
            <CardsWrapper> 
                <CardsCard to='rent' smooth={true} duration={500} spy={true} exact='true'>
                    <CardsIcon src="/images/rent.svg" alt="space"/>
                    <CardsH2>Renting</CardsH2>
                    <CardsP>Search for and book trailers</CardsP>
                </CardsCard>
                <CardsCard to='host' smooth={true} duration={500} spy={true} exact='true'>
                    <CardsIcon src="/images/host.svg" alt="space"/>
                    <CardsH2>Hosting</CardsH2>
                    <CardsP>Share your trailer and make some extra cash</CardsP>
                </CardsCard>
                <CardsCard to='business' smooth={true} duration={500} spy={true} exact='true'>
                    <CardsIcon src="/images/business.svg" alt="space"/>
                    <CardsH2>Business</CardsH2>
                    <CardsP>Make your trailers available to a wider audience</CardsP>
                </CardsCard>
            </CardsWrapper>
        </CardsContainer>
    )
}

export default Cards