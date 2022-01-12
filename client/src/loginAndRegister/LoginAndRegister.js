import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import Card from '../functionalComponents/card/Card'
import "./styles.css"
import { pageLinkConstants } from "../constants/pageLinkConstants";

const LoginAndRegister = ({ innerComponent }) => {

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("access_token")
        if (token && token !== "") {
            navigate(pageLinkConstants.HOME)
        }
    }, [])

    return (
        <>
            <div className="loginRegisterSpace"/>
            <div className="loginRegisterCardContainer">
                <Card>
                    {innerComponent}
                </Card>
            </div>
        </>
    )
}

export default LoginAndRegister


