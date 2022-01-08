import React from 'react'
import EventListDetailCard from './EventListDetailCard'
import EventListAddCard from './EventListAddCard';

const EventList = () => {
    const eventList = [
        {
            id: "1",
            name: "event1",
            date: "1/1/2021",
            min: 0,
            max: 50,
            giftas: [
                {
                    id: 1,
                    username: "testUser1",
                },
                {
                    id: 2,
                    username: "testUser2",
                },
                {
                    id: 3,
                    username: "testUser3",
                },
            ]
        },
        {
            id: "1",
            name: "event1",
            date: "1/1/2021",
            min: 0,
            max: 50,
            giftas: [
                {
                    id: 1,
                    username: "testUser1",
                },
                {
                    id: 2,
                    username: "testUser2",
                },
                {
                    id: 3,
                    username: "testUser3",
                },
            ]
        },
        {
            id: "1",
            name: "event1",
            date: "1/1/2021",
            min: 0,
            max: 50,
            giftas: [
                {
                    id: 1,
                    username: "testUser1",
                },
                {
                    id: 2,
                    username: "testUser2",
                },
                {
                    id: 3,
                    username: "testUser3",
                },
            ]
        },
        {
            id: "1",
            name: "event1",
            date: "1/1/2021",
            min: 0,
            max: 50,
            giftas: [
                {
                    id: 1,
                    username: "testUser1",
                },
                {
                    id: 2,
                    username: "testUser2",
                },
                {
                    id: 3,
                    username: "testUser3",
                },
            ]
        },
        {
            id: "1",
            name: "event1",
            date: "1/1/2021",
            min: 0,
            max: 50,
            giftas: [
                {
                    id: 1,
                    username: "testUser1",
                },
                {
                    id: 2,
                    username: "testUser2",
                },
                {
                    id: 3,
                    username: "testUser3",
                },
            ]
        },
        {
            id: "1",
            name: "event1",
            date: "1/1/2021",
            min: 0,
            max: 50,
            giftas: [
                {
                    id: 1,
                    username: "testUser1",
                },
                {
                    id: 2,
                    username: "testUser2",
                },
                {
                    id: 3,
                    username: "testUser3",
                },
            ]
        },
        {
            id: "1",
            name: "event1",
            date: "1/1/2021",
            min: 0,
            max: 50,
            giftas: [
                {
                    id: 1,
                    username: "testUser1",
                },
                {
                    id: 2,
                    username: "testUser2",
                },
                {
                    id: 3,
                    username: "testUser3",
                },
            ]
        },
        {
            id: "1",
            name: "event1",
            date: "1/1/2021",
            min: 0,
            max: 50,
            giftas: [
                {
                    id: 1,
                    username: "testUser1",
                },
                {
                    id: 2,
                    username: "testUser2",
                },
                {
                    id: 3,
                    username: "testUser3",
                },
            ]
        },
        {
            id: "1",
            name: "event1",
            date: "1/1/2021",
            min: 0,
            max: 50,
            giftas: [
                {
                    id: 1,
                    username: "testUser1",
                },
                {
                    id: 2,
                    username: "testUser2",
                },
                {
                    id: 3,
                    username: "testUser3",
                },
            ]
        },
        {
            id: "1",
            name: "event1",
            date: "1/1/2021",
            min: 0,
            max: 50,
            giftas: [
                {
                    id: 1,
                    username: "testUser1",
                },
                {
                    id: 2,
                    username: "testUser2",
                },
                {
                    id: 3,
                    username: "testUser3",
                },
            ]
        },
        {
            id: "2",
            name: "event2",
            date: "1/1/2022",
            min: 100,
            max: 1000,
            giftas: [
                {
                    id: 1,
                    username: "testUser1",
                },
                {
                    id: 2,
                    username: "testUser2",
                },
                {
                    id: 3,
                    username: "testUser3",
                },
                {
                    id: 4,
                    username: "testUser4",
                },
                {
                    id: 5,
                    username: "testUser5",
                },
                {
                    id: 6,
                    username: "testUser6",
                },
                {
                    id: 7,
                    username: "testUser7",
                },
                {
                    id: 8,
                    username: "testUser8",
                },
                {
                    id: 9,
                    username: "testUser9",
                },
                {
                    id: 10,
                    username: "testUser10",
                },
                {
                    id: 11,
                    username: "testUser12",
                },
                {
                    id: 12,
                    username: "testUser13",
                },
                {
                    id: 13,
                    username: "testUser14",
                },
                {
                    id: 14,
                    username: "testUser15",
                },
                {
                    id: 15,
                    username: "testUser16",
                },
                {
                    id: 16,
                    username: "testUser17",
                },
                {
                    id: 17,
                    username: "testUser18",
                },
            ],
        },
    ];

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
