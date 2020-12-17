import React from "react"
import "./Events.scss"

export const Event = ({ event }) => (
    <section className="event">
        <h3 className="event__location">{event.location}</h3>
    </section>
)