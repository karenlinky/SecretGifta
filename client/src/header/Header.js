import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './header.css'
import WideMenu from './WideMenu'
import NarrowMenu from './NarrowMenu'
import { pageLinkConstants } from '../constants/pageLinkConstants'

const Header = ({ currentPage, children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("access_token")
        if (!token || token == "") {
            navigate(pageLinkConstants.LOGIN)
        }
    }, [])

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }

    const menu = [
        "HOME",
        // "FRIENDS",
        // "WISHLIST",
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
