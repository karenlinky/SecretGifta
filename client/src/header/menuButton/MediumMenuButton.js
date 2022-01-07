import React from 'react'
import { Link } from 'react-router-dom'
import '../header.css'

const MediumMenuButton = ({ onPage, to, children, className, ...props }) => {
    return (
        <Link
            className={className + " menuButton medium" + (onPage ? " onPage" : "")}
            to={to}
            {...props}
        >
            {children}
        </Link>
    )
}

export default MediumMenuButton
