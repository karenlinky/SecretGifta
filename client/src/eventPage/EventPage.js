import React from 'react'
import Header from '../header/Header'
import { pageLinkConstants } from '../constants/pageLinkConstants'

const EventPage = () => {
    return (
        <Header currentPage={pageLinkConstants.HOME}>
            <div>
                EventList
            </div>
        </Header>
    )
}

export default EventPage
