import React from 'react'
import Header from '../header/Header'
import PageTitle from '../functionalComponents/pageTitle/PageTitle'
import { Formik } from "formik";
import EditEventForm from './EditEventForm';
import './eventDetailPage.css'

const EditEventPage = () => {
    const initialValues = {
        name: '',
        date: '',
    }

    return (
        <Header>
            <PageTitle>Event</PageTitle>
            <Formik
                initialValues={initialValues}
                // validationSchema={loginSchema}
                // onSubmit={login}
                >
                <EditEventForm />
            </Formik>
        </Header>
    )
}

export default EditEventPage
