import React from 'react'
import { Field, ErrorMessage } from 'formik'
import './validatedField.css'
import ValidatedFieldError from './ValidatedFieldError'

const ValidatedField = ({ name, ...props }) => {
    return (
        <>
            <Field
                name={name}
                {...props}>
            </Field>
            <ErrorMessage
                name={name}
            >
                { msg => <ValidatedFieldError>{msg}</ValidatedFieldError> }
            </ErrorMessage>
        </>
    )
}

export default ValidatedField
