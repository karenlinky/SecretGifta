import React from 'react'
import Header from '../header/Header'
import PageTitle from '../functionalComponents/pageTitle/PageTitle'
import { Form, Formik } from "formik";
import * as Yup from "yup";
import EditEventForm from './EditEventForm';
import './eventDetailPage.css'
import { messages } from './messages'

const eventSchema = Yup.object({
    name: Yup.string().trim().required(messages.eventNameRequired),
    date: Yup
    .date()
    .nullable()
    .required(messages.eventDateRequired),
    // min: Yup.number().required(),
    min: Yup.number()
    .min(0, messages.eventMinLogic)
    .required(messages.eventMinRequired),
    max: Yup.number().min(Yup.ref('min'), messages.eventMinMaxLogic),
    giftas: Yup.array().min(2, messages.eventParticipantsRequired),
    number: Yup.number().required(messages.eventNumberRequired)
    .min(1, messages.eventNumberLogic),
})

const EditEventPage = () => {
    const initialValues = {
        name: '',
        date: '',
        min: '',
        max: '',
        giftas: [],
        number: 1,
    }

    const create = ({ giftas, number }, ) => {
        if (number > giftas.length - 1) {
            return;
        }
        console.log('hi')
    }

    return (
        <Header>
            <PageTitle>Event</PageTitle>
            <Formik
                initialValues={initialValues}
                validationSchema={eventSchema}
                onSubmit={create}
                >
                <Form autoComplete="off">
                    <EditEventForm />
                </Form>
            </Formik>
        </Header>
    )
}

export default EditEventPage
