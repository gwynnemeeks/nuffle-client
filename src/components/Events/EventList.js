/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { EventContext } from "./EventProvider"

import "./Events.scss"

export const EventList = (props) => {
    const { events, getEvents } = useContext(EventContext)

    useEffect(() => {
        getEvents()
    }, [])

    return (
        <div className="events">
            <h1>Your Upcoming Events</h1>
            <button className="btn btn-light"
                onClick={() => {
                    props.history.push({ pathname: "/events/new" })
                }}
            >Register New Event</button>
            
            <article className="eventList">
                {
                    events.map(eve => {
                        return <Link key={eve.id} to={`/events/${eve.id}`}>
                            <h3>{eve.event_schedule}</h3>
                        </Link>
                    })
                }
            </article>
        </div>
    )
}