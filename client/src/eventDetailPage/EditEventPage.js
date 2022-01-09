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
        min: '',
        max: '',
        giftas: [
            // {
            //     id: 2,
            //     username: 'testUser2',
            // },
            // {
            //     id: 3,
            //     username: 'testUser3',
            // },
        ],
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
