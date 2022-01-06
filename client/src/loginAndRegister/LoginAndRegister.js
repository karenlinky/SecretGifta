import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import Card from '../functionalComponents/card/Card'
import "./styles.css"

const LoginAndRegister = ({ innerComponent }) => {

    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem("access_token")
        if (token && token !== "") {
            navigate("/home")
        }
    })

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


