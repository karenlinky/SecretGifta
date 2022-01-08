import React from 'react'
import { Form, useFormikContext } from "formik";
import Text from '../functionalComponents/text/Text';
import TextBox from '../functionalComponents/textBox/TextBox';
import ValidatedField from '../functionalComponents/validatedField/ValidatedField';
import DateSelector from '../functionalComponents/dateSelector/DateSelector';
import './eventDetailPage.css'

const EditEventForm = () => {
    const { values, setFieldValue } = useFormikContext();

    return (
        <Form>
            <div className={"eventDetailSection"}>
                <div><Text className={"eventDetailSectionHeader"}>Event Name</Text></div>
                <div className={"eventDetailSectionContent"}>
                    <ValidatedField
                        as={TextBox}
                        name={"name"}
                        placeholder={"Name"}
                    />
                </div>
            </div>
            <div className={"eventDetailSection"}>
                <div><Text className={"eventDetailSectionHeader"}>Date</Text></div>
                <div className={"eventDetailSectionContent"}>
                    <ValidatedField
                        as={DateSelector}
                        name={'date'}
                        selected={values.date}
                        onChange={(date) => setFieldValue('date', date)}
                        minDate={new Date()}
                    />
                </div>
            </div>
        </Form>
    )
}

export default EditEventForm
