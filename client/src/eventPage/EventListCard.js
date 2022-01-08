import React from 'react'
import Card from '../functionalComponents/card/Card'
import { Link } from "react-router-dom";
import './eventPage.css'

const EventListCard = ({ children, destination }) => {
    return (
        <Link className={"eventListCardLink"} to={destination ? destination : "/#"}>
            <div className={"eventListCardContainer"}>
                <Card className={"eventListCard smallCard"}>
                    {children}
                </Card>
            </div>
        </Link>
    )
}

export default EventListCard

