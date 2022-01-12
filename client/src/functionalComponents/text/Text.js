import React from 'react'
import './text.css'

const Text = ({ children, className, ...props }) => {
    return (
        <span className={"text " + className } {...props}>
            {children}
        </span>
    )
}

export default Text
