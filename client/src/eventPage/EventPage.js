import React from 'react'
import Header from '../header/Header'
import { pageLinkConstants } from '../constants/pageLinkConstants'
import PageTitle from '../functionalComponents/pageTitle/PageTitle'
import EventList from './EventList'

const EventPage = () => {
    return (
        <Header currentPage={pageLinkConstants.HOME}>
        <PageTitle>Home</PageTitle>
        <EventList/>
        </Header>
    )
}

export default EventPage
