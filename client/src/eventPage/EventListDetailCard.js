import React from 'react'
import EventListCard from './EventListCard'
import './eventPage.css'
import Text from '../functionalComponents/text/Text'

const EventListDetailCard = ({ id, name, date, min, max, giftas }) => {
    const displayUserName = (giftas) => {
        var names = ""
        giftas.forEach(gifta => {
            names += gifta.username + ", ";
        })
        names = names.substring(0, names.length - 2)
        return names
    }
    
    const displayValueLimit = (min, max) => {
        return "$" + min + " - $" + max
    }

    return (
        <EventListCard>
            <div className={"eventListContent"}>
                <div className={"cardHeader eventListTitle"}>{name}</div>
                <div><Text>{date}</Text></div>
                <div><Text>{displayValueLimit(min, max)}</Text></div>
                <div><Text>{displayUserName(giftas)}</Text></div>
            </div>
        </EventListCard>
    )
}

export default EventListDetailCard
