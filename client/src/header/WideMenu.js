import React from 'react'
import { FaBell, FaSignOutAlt } from "react-icons/fa"
import MediumMenuButton from './menuButton/MediumMenuButton'
import NarrowMenuButton from './menuButton/NarrowMenuButton'
import HeaderTitle from './HeaderTitle'
import { pageLinkConstants } from '../constants/pageLinkConstants'
import { pageNameConstants } from './pageConstants'
import './header.css'

const WideMenu = ({ menu, currentPage }) => {
    return (
        <>
        <div className="headerPart left">
            <HeaderTitle />
        </div>
        <div className="headerPart center">
            {
                menu.map(pageName => {
                    return <MediumMenuButton key={pageName} onPage={pageLinkConstants[pageName] == currentPage} to={pageLinkConstants[pageName]}>{pageNameConstants[pageName]}</MediumMenuButton>
                })
            }
        </div>
        <div className="headerPart right">
            <NarrowMenuButton to={pageLinkConstants.LOGOUT}><FaSignOutAlt /></NarrowMenuButton>
        </div>
        </>
    )
}

export default WideMenu
