import React from 'react'
import Card from '../functionalComponents/card/Card'
import CardSection from '../functionalComponents/card/CardSection'
import './eventPage.css'

const EventListCard = ({ id, name, date, min, max, giftas }) => {
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
        <div className={"eventListCardContainer"}>
            <Card className={"eventListCard smallCard"}>
                <div className={"eventListContent"}>
                    <div className={"cardHeader eventListTitle"}>{name}</div>
                    <div>{date}</div>
                    <div>{displayValueLimit(min, max)}</div>
                    <div>{displayUserName(giftas)}</div>
                </div>
            </Card>
        </div>
    )
}

export default EventListCard
