import { useState } from 'react'
import './header.css'
import WideMenu from './WideMenu'
import NarrowMenu from './NarrowMenu'

const Header = ({ currentPage, children }) => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }

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
                <NarrowMenu menu={menu} currentPage={currentPage} openMenu={openMenu} toggleMenu={toggleMenu}/>
            </div>
        </div>
        {openMenu &&
            <div
                className={"narrowMenuBackground"}
                onClick={toggleMenu}
            />
        }
        <div className={"contentWrapper"}>
            {children}
        </div>
        </>
    )
}

export default Header
