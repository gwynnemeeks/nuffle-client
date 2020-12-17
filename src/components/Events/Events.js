import React from "react"
import "./Events.scss"

export const event = ({ event }) => (
    <section className="event">
        <h3 className="event__location">{event.location}</h3>
        <p className="event__event_schedule">{event.event_schedule}</p>
    </section>
)