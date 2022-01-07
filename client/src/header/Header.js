import React from 'react'
import './header.css'
import WideMenu from './WideMenu'
import NarrowMenu from './NarrowMenu'

const Header = ({ currentPage, children }) => {
    const menu = [
        "HOME",
        "FRIENDS",
        "WISHLIST",
    ]

    return (
        <>
        <div className="header">
            <div className="wideHeader">
                <WideMenu menu={menu} currentPage={currentPage}/>
            </div>
            <div className="narrowHeader">
                <NarrowMenu menu={menu} currentPage={currentPage}/>
            </div>
        </div>
        {children}
        </>
    )
}

export default Header
