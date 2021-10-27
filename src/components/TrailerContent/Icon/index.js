import React from 'react'
import { IconStyle, Text, IconWrapper } from './IconElements';
import { IconContext } from "react-icons";

const Icon = ({ icon, title }) => {
    return (
        <IconContext.Provider value={{ size: '2rem' }}>
            <IconWrapper>
                {icon}
                <Text>
                    {title}
                </Text>
            </IconWrapper>
        </IconContext.Provider>
    )
}

export default Icon;