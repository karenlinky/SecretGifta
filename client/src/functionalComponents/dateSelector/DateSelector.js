import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './datePicker.css'

const DateSelector = ({ selected, onChange, ...props }) => {
    return (
        <DatePicker
            selected={selected ? selected : ''}
            onChange={onChange}
            wrapperClassName={'datePicker'}
            {...props}
            />
    )
}

export default DateSelector
