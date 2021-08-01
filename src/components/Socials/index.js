import React from 'react';
import { FiTwitter, FiInstagram, FiFacebook } from 'react-icons/fi';
import { SocialsContainer, IconLink } from './SocialsElements';

const Socials = () => {

    return (
        <SocialsContainer>
            <div>
                <IconLink as="a" target="_blank" href="https://twitter.com/rent_trailers"><FiTwitter /></IconLink>
                <IconLink as="a" target="_blank" href="https://www.instagram.com/rent_trailers/"><FiInstagram /></IconLink>
                <IconLink as="a" target="_blank" href="https://www.facebook.com/TrailerHub-104956081829259"><FiFacebook /></IconLink>
            </div>
        </SocialsContainer>
    )
}

export default Socials