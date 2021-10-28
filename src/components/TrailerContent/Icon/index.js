import React from 'react'
import { Text, IconWrapper } from './IconElements';

const Icon = ({ icon, title }) => {
    return (
        <IconWrapper>
            {icon}
            <Text>
                {title}
            </Text>
        </IconWrapper>
    )
}

export default Icon;