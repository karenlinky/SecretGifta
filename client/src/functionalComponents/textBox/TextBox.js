import React from 'react'
import './textBox.css'

const TextBox = ({ className, ...props }) => {
    return (
        <input
            className={"textBox " + className}
            {...props}
        />
    )
}

export default TextBox
