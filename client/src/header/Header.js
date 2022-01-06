import React from 'react'
import './header.css'

const Header = ({ children }) => {
    return (
        <>
        <div className="header">
            <div className="wideHeader">
                wide
            </div>
            <div className="narrowHeader">
                narrow
            </div>
        </div>
        {children}
        </>
    )
}

export default Header
