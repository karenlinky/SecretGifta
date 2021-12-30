import React from "react"
import { Formik, Form } from "formik";
import * as Yup from "yup";
import ValidatedField from "../functionalComponents/validatedField/ValidatedField";
import Text from "../functionalComponents/text/Text";
import TextLink from "../functionalComponents/text/TextLink";
import TextBox from "../functionalComponents/textBox/TextBox";
import Button from "../functionalComponents/button/Button"
import { messages } from './messages'

const loginSchema = Yup.object({
    username: Yup.string().trim().required(messages.usernameRequired),
    password: Yup.string().trim().required(messages.passwordRequired),
})

const Login = () => {
    const initialValues = {
        username: '',
        password: '',
    }

    const login = ({ username, password }) => {
        // console.log("Logging in with " + username + " and " + password);
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
                        <Text>Doesn't have an account? </Text><TextLink className="textBold" href="#">Create one</TextLink>
                    </div>
                </Form>
            </Formik>
        </>
    )
}

export default Login
