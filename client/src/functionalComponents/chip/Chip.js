import React from 'react'
import Text from '../text/Text'
import { FaTimes } from 'react-icons/fa'
import './chip.css'

const Chip = ({ id, content, onRemove }) => {
    const handleClick = (id) => {
        if (onRemove) {
            onRemove(id)
        }
    }

    return (
        <div
            className={'chip' + (onRemove ? ' removable' : '')}
            onClick={() => {handleClick(id)}}>
            {onRemove && <FaTimes className={'chipContent chipDeleteIcon'}/>}
            <Text className={'chipContent'}>{content}</Text>
        </div>
    )
}

export default Chip
