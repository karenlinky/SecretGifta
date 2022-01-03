import React from 'react'
import { FaExclamationTriangle, FaInfoCircle, FaCheckCircle } from "react-icons/fa";
import { modalConstants, getColor } from './modalConstants'

const ModalSymbol = ({ modalType }) => {

    const getSymbol = modalType => {
        const color = getColor(modalType);

        switch(modalType) {
            case modalConstants.WARNING:
                return <FaExclamationTriangle color={color}/>;
            case modalConstants.ERROR:
                return <FaExclamationTriangle color={color}/>;
            case modalConstants.SUCCESS:
                return <FaCheckCircle color={color}/>;
            case modalConstants.INFO:
            default:
                return <FaInfoCircle color={color}/>;
        }
    }
    console.log(modalType == modalConstants.ERROR)
    return (
        <div>
            {getSymbol(modalType)}
        </div>
    )
}

export default ModalSymbol
