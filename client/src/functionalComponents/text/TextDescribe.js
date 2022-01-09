import React from 'react'
import Text from './Text'

const TextDescribe = ({ children }) => {
    return (
        <Text className={'textDescribe'}>
            {children}
        </Text>
    )
}

export default TextDescribe
