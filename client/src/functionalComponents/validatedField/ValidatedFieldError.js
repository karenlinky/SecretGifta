import React from 'react'
import './validatedField.css'

const ValidatedFieldError = ({ children }) => {
    return (
        <div className="validatedFieldError">
            {children}
        </div>
    )
}

export default ValidatedFieldError
