import React from 'react'
import './text.css'

const Text = ({ children, className }) => {
    return (
        <span className={"text " + className }>
            {children}
        </span>
    )
}

export default Text
