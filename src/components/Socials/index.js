import React from 'react';
import { FiTwitter, FiInstagram, FiFacebook } from 'react-icons/fi';
import { SocialsContainer, IconLink } from './SocialsElements';

const Socials = () => {

    return (
        <SocialsContainer>
            <IconLink as="a" target="_blank" href="https://twitter.com/rent_trailers" style={{color: '#1A98E4'}}><FiTwitter /></IconLink>
            <IconLink as="a" target="_blank" href="https://www.instagram.com/rent_trailers/" style={{color: '#C42D91'}}><FiInstagram /></IconLink>
            <IconLink as="a" target="_blank" href="https://www.facebook.com/TrailerHub-104956081829259" style={{color: '#1977F2'}}><FiFacebook /></IconLink>
        </SocialsContainer>
    )
}

export default Socials