import React from 'react'
import './pageTitle.css'

const PageTitle = ({ children }) => {
    return (
        <div className={"pageTitle"}>
            {children}
        </div>
    )
}

export default PageTitle
