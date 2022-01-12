import React from 'react'
import EventListCard from './EventListCard'
import './eventPage.css'
import Text from '../functionalComponents/text/Text'
import { display } from './display'

const EventListDetailCard = ({ id, name, date, min, max, giftas }) => {
    const displayUserName = (giftas) => {
        var names = "Participants: "
        giftas.forEach(gifta => {
            names += gifta.username + ", ";
        })
        names = names.substring(0, names.length - 2)
        return names
    }

    return (
        <EventListCard destination={'/event/' + id}>
            <div className={"eventListContent"}>
                <div className={"cardHeader eventListTitle"}>{name}</div>
                <div><Text>{display.displayDate(date)}</Text></div>
                <div><Text>{display.displayValueLimit(min, max)}</Text></div>
                <div><Text>{displayUserName(giftas)}</Text></div>
            </div>
        </EventListCard>
    )
}

export default EventListDetailCard
