import React from "react"
import { Formik, Form } from "formik";
import * as Yup from "yup";
import ValidatedField from "../functionalComponents/validatedField/ValidatedField";
import Text from "../functionalComponents/text/Text";
import TextLink from "../functionalComponents/text/TextLink";
import TextBox from "../functionalComponents/textBox/TextBox";
import Button from "../functionalComponents/button/Button"
import { messages } from './messages'

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

    const register = ({ username, password, confirmPassword }) => {
        console.log("Registering with " + username + ", " + password + " and " + confirmPassword);
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
                        <Text>Already have an account? </Text><TextLink className="textBold" to="/login">Login here</TextLink>
                    </div>
                </Form>
            </Formik>
        </>
    )
}

export default Register