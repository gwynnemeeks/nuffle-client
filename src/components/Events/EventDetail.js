/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react"

import { EventContext } from "./EventProvider"

export const EventDetails = (props) => {
    const { events, getSingleEvent, deleteEvent } = useContext(EventContext)

    const [setEvent] = useState()

    useEffect(() => {
        const eventId = parseInt(props.match.params.eventId)
        getSingleEvent(eventId)
            .then(setEvent)
    }, [])

    return (
        <>
        <section className="event">
            <h3 className="event__event_schedule">{events.event_schedule}</h3>
            <p className="event__location">{events.location}</p>
            <p className="event__day_time">{events.day} @ {events.time}</p>
            <button className="btn btn-light" onClick={() => deleteEvent(events.id).then(() => props.history.push("/events"))} >Delete Team</button>
            <button className="btn btn-dark" onClick={() => {props.history.push(`/events/edit/${events.id}`)}}>Edit Event</button>
        </section>
        </>
    )
}