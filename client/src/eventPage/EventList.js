import { useState, useEffect, useContext } from 'react'
import EventListDetailCard from './EventListDetailCard'
import EventListAddCard from './EventListAddCard';
import { checkExpired } from '../loginAndRegister/helper'
import { useNavigate } from 'react-router-dom';
import { pageLinkConstants } from '../constants/pageLinkConstants';
import { AppContext } from '../AppContext'
import { messages as generalMessages } from '../messages'
import { modalConstants } from '../functionalComponents/modal/modalConstants'

const EventList = () => {
    
    const { setOpenModal, setModalType, setModalContent } = useContext(AppContext);

    const navigate = useNavigate();

    const [eventList, setEventList] = useState([])

    const headers = {
        "Authorization": "Bearer " + localStorage.getItem("access_token"),
    };

    const options = {
        method: 'GET',
        headers: headers,
    }

    const fetchEventList = () => {
        fetch(
            `/events`,
            options
        ).then(async response => {
            const data = await response.json();
            const expired = checkExpired(data);
            if (expired) {
                navigate(pageLinkConstants.LOGOUT);
            }
            setEventList(data.events);
        }).catch(err => {
            setOpenModal(true);
            setModalType(modalConstants.ERROR);
            setModalContent(generalMessages.generalTryAgainError);
        })
    }
    useEffect(() => {
        fetchEventList();
    }, [])

    return (
        <>
        <EventListAddCard/>
        {eventList.map(event => {
            return <EventListDetailCard key={event.id} {...event} />
        })}
        </>
    )
}

export default EventList
