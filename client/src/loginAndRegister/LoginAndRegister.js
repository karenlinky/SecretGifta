import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Card from '../functionalComponents/card/Card'
import "./styles.css"

const LoginAndRegister = ({ innerComponent }) => {
    return (
        <div className="loginRegisterCardContainer">
            <Card>
                {innerComponent}
            </Card>
        </div>
    )
}

export default LoginAndRegister


