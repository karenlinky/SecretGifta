import React from 'react'
import './text.css'

const TextLink = ({ children, className, ...props }) => {
    return (
        <a
            className={"textLink " + className }
            {...props}
        >
            {children}
        </a>
    )
}

export default TextLink
