import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../AppContext'
import { messages as generalMessages } from '../messages'
import { modalConstants } from '../functionalComponents/modal/modalConstants'
import Header from '../header/Header'
import PageTitle from '../functionalComponents/pageTitle/PageTitle'
import { Form, Formik } from "formik";
import * as Yup from "yup";
import EditEventForm from './EditEventForm';
import './eventDetailPage.css'
import { messages } from './messages'
import { checkExpired } from '../helper'
import { pageLinkConstants } from '../constants/pageLinkConstants'

const eventSchema = Yup.object({
    name: Yup.string()
    .trim()
    .max(50, messages.eventNameRequired)
    .required(messages.eventNameRequired),
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

    const { setOpenModal, setModalType, setModalContent } = useContext(AppContext);
    const navigate = useNavigate();

    const create = ({ name, date, min, max, giftas, number }, ) => {
        if (number > giftas.length - 1) {
            return;
        }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            },
            body: JSON.stringify({
                name: name,
                date: date,
                min: min,
                max: max,
                giftas: giftas,
                number: number,
            })
        }
        fetch(
            "/edit_event",
            options,
        ).then(async response => {
            const data = await response.json();
            const expired = checkExpired(data);
            if (expired) {
                navigate(pageLinkConstants.LOGOUT);
            }
            if (!data.success) {
                setOpenModal(true);
                setModalType(modalConstants.ERROR);
                setModalContent(messages.generalTryAgainError);
            } else {
                setOpenModal(true);
                setModalType(modalConstants.SUCCESS);
                setModalContent('Your event is successfully saved. All participants can view this event in their homepage.');
                navigate(pageLinkConstants.HOME);
            }
        }).catch(err => {
            setOpenModal(true);
            setModalType(modalConstants.ERROR);
            setModalContent(generalMessages.generalTryAgainError);
        })
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
