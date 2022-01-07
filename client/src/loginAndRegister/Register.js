import { useContext } from 'react'
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
import { pageLinkConstants } from '../constants/pageLinkConstants';

const registerSchema = Yup.object({
    username: Yup.string()
        .trim()
        .min(5, messages.registerUsernameRequired)
        .max(50, messages.registerUsernameRequired)
        .required(messages.registerUsernameRequired),
    password: Yup.string()
        .min(7, messages.registerPasswordRequired)
        .max(250, messages.registerUsernameRequired)
        .matches(/^(?!.* )(?=.*\d)(?=.*[A-Za-z]).*$/, messages.registerPasswordRequired)
        .required(messages.registerPasswordRequired),
    confirmPassword: Yup.string()
        .required(messages.registerConfirmPasswordRequired)
        .equals([Yup.ref('password')], messages.registerConfirmPassword),
})

const Register = () => {
    const initialValues = {
        username: '',
        password: '',
        confirmPassword: '',
    }

    const { setOpenModal, setModalType, setModalContent } = useContext(AppContext);

    const navigate = useNavigate();

    const register = ({ username, password }) => {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        }
        fetch(
            "/register",
            options,
        ).then(async response => {
            const data = await response.json();
            if (!data["success"]) {
                setOpenModal(true);
                setModalType(modalConstants.ERROR);
                setModalContent(messages.registerUsernameTaken);
            } else {
                setOpenModal(true);
                setModalType(modalConstants.SUCCESS);
                setModalContent(messages.registerSuccess);
                navigate(pageLinkConstants.LOGIN);
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
                Register
            </div>
            <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={register}
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
                        <Text className="textBold">Confirm Password</Text>
                        <ValidatedField
                            as={TextBox}
                            name={"confirmPassword"}
                            placeholder={"re-type password"}
                            className={"fieldFullWidth"}
                            type={"password"}
                        />
                    </div>
                    <div className="cardSection">
                        <Button type="submit" className="buttonPrimary">Register</Button>
                    </div>
                    <div className="cardSection">
                        <Text>Already have an account? </Text><TextLink className="textBold" to={pageLinkConstants.LOGIN}>Login here</TextLink>
                    </div>
                </Form>
            </Formik>
        </>
    )
}

export default Register
