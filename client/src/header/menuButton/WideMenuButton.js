import React from 'react'
import { Link } from 'react-router-dom'
import '../header.css'

const WideMenuButton = ({ onPage, to, children, className, ...props }) => {
    return (
        <Link
            className={className + " menuButton wide" + (onPage ? " onPage" : "")}
            to={to}
            {...props}
        >
            {children}
        </Link>
    )
}

export default WideMenuButton
