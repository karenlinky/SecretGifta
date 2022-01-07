import React from 'react'
import { Link } from 'react-router-dom'
import '../header.css'

const NarrowMenuButton = ({ onPage, to, children, className, ...props }) => {
    return (
        <Link
            className={className + " menuButton narrow" + (onPage ? " onPage" : "")}
            to={to}
            {...props}
        >
            {children}
        </Link>
    )
}

export default NarrowMenuButton
