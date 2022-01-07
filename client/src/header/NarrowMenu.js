import { useState } from 'react'
import { FaBars } from "react-icons/fa"
import WideMenuButton from './menuButton/WideMenuButton'
import HeaderTitle from './HeaderTitle'
import { pageLinkConstants } from '../constants/pageLinkConstants'
import { pageNameConstants } from './pageConstants'
import './header.css'

const NarrowMenu = ({ menu, currentPage }) => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <>
        <div className={"narrowMenuContainer"}>
            <div className="narrowHeaderContainer">
                <div className="narrow headerPart left">
                    <HeaderTitle />
                </div>
                <div className="narrow headerPart right">
                    <FaBars className={"toggleNarrowMenuButton"} onClick={toggleMenu} />
                </div>
            </div>
            {openMenu && <div className="narrowHeaderButtonContainer">
                {
                    menu.map(pageName => {
                        return <WideMenuButton key={pageName} onPage={pageLinkConstants[pageName] == currentPage} to={pageLinkConstants[pageName]}>{pageNameConstants[pageName]}</WideMenuButton>
                    })
                }
                <WideMenuButton to={pageLinkConstants.LOGOUT}>Logout</WideMenuButton>
            </div>}
        </div>
        </>
    )
}

export default NarrowMenu
