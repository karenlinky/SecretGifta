import { useContext } from "react"
import { useNavigate } from "react-router-dom";
import { AppContext } from '../AppContext'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import ValidatedField from "../functionalComponents/validatedField/ValidatedField";
import Text from "../functionalComponents/text/Text";
import TextLink from "../functionalComponents/text/TextLink";
import TextBox from "../functionalComponents/textBox/TextBox";
import Button from "../functionalComponents/button/Button"
import { messages } from './messages'
import { messages as generalMessages } from '../messages'
import { modalConstants } from '../functionalComponents/modal/modalConstants'
import { pageLinkConstants } from "../constants/pageLinkConstants";

const loginSchema = Yup.object({
    username: Yup.string().trim().required(messages.loginUsernameRequired),
    password: Yup.string().trim().required(messages.loginPasswordRequired),
})

const Login = () => {
    const initialValues = {
        username: '',
        password: '',
    }

    const { setOpenModal, setModalType, setModalContent } = useContext(AppContext);

    const navigate = useNavigate();

    const login = ({ username, password }) => {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        }
        fetch(
            "/login",
            options,
        ).then(async response => {
            const data = await response.json();
            if (!data["access_token"] || data["access_token"]==="") {
                setOpenModal(true);
                setModalType(modalConstants.ERROR);
                setModalContent(messages.loginFailed);
            } else {
                const token = data["access_token"]
                localStorage.setItem("access_token", token)
                navigate(pageLinkConstants.HOME);
            }
        }).catch(err => {
            setOpenModal(true);
            setModalType(modalConstants.ERROR);
            setModalContent(generalMessages.generalTryAgainError);
        })
    }

    return (
        <>
            <div className="cardSection cardHeader">
                Login
            </div>
            <Formik
                initialValues={initialValues}
                validationSchema={loginSchema}
                onSubmit={login}
            >
                <Form>
                    <div className="cardSection">
                        <Text className="textBold">Username</Text>
                        <ValidatedField
                            as={TextBox}
                            name={"username"}
                            placeholder={"username"}
                            className={"fieldFullWidth"}
                        />
                    </div>
                    <div className="cardSection">
                        <Text className="textBold">Password</Text>
                        <ValidatedField
                            as={TextBox}
                            name={"password"}
                            placeholder={"password"}
                            className={"fieldFullWidth"}
                            type={"password"}
                        />
                    </div>
                    <div className="cardSection">
                        <Button type="submit" className="buttonPrimary">Login</Button>
                    </div>
                    <div className="cardSection">
                        <Text>Doesn't have an account? </Text><TextLink className="textBold" to={pageLinkConstants.REGISTER}>Create one</TextLink>
                    </div>
                </Form>
            </Formik>
        </>
    )
}

export default Login
