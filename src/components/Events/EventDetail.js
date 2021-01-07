/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react"

import { EventContext } from "./EventProvider"

export const EventDetails = (props) => {
    const { getSingleEvent, deleteEvent, singleEvent } = useContext(EventContext)

    useEffect(() => {
        const eventId = parseInt(props.match.params.eventId)
        getSingleEvent(eventId)
    }, [])

    return (
        <>
        <section className="event">
            <h3 className="event__event_schedule">{singleEvent.event_schedule}</h3>
            <p className="event__location">{singleEvent.location}</p>
            <p className="event__day_time">{singleEvent.day} @ {singleEvent.time}</p>
            <button className="btn btn-light" onClick={() => deleteEvent(singleEvent.id).then(() => props.history.push("/events"))} >Delete Event</button>
            <button className="btn btn-dark" onClick={() => {props.history.push(`/events/edit/${singleEvent.id}`)}}>Edit Event</button>
        </section>
        </>
    )
}