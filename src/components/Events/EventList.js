/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react"
import { EventContext } from "./EventProvider"
import { Event } from "./Events"
import "./Events.scss"

export const EventList = (props) => {
    const { events, getEvents } = useContext(EventContext)

    useEffect(() => {
        getEvents()
    }, [])

    return(
        <div className="events">
            <h1>Your Upcoming Events</h1>
            <button className="btn btn-light"
            onClick={() => {
            props.history.push({ pathname: "/eventss/new" })
            }}
            >Register New Event</button>
            {
                events.map(eve => <Event key={eve.id} event={eve} />)
            }
        </div>
    )
}