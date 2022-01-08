import React from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import EventListCard from './EventListCard'
import { pageLinkConstants } from '../constants/pageLinkConstants'
import './eventPage.css'

const EventListAddCard = () => {
    return (
        <EventListCard destination={pageLinkConstants.CREATEEVENT}>
            <div className={"addIconContainer"}>
                <FaPlusCircle className={"addIcon"}/>
                <div className={"addText"}>Add Event</div>
            </div>
        </EventListCard>
    )
}

export default EventListAddCard
