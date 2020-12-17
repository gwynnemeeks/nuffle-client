/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react"
import { EventContext } from "./EventProvider"
import { Event } from "./Events"
import "./Events.scss"

export const EventList = () => {
    const { events, getEvents } = useContext(EventContext)

    useEffect(() => {
        getEvents()
    }, [])

    return(
        <div className="events">
            {
                events.map(eve => <Event key={eve.id} event={eve} />)
            }
        </div>
    )
}