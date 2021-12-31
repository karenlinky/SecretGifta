import React from 'react'
import { Link } from 'react-router-dom'
import './text.css'

const TextLink = ({ children, className, ...props }) => {
    return (
        <Link
            className={"textLink " + className }
            {...props}
        >
            {children}
        </Link>
    )
}

export default TextLink
