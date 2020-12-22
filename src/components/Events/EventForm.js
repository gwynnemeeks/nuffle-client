import React, { useContext, useEffect, useState } from "react"
import { EventContext } from "./EventProvider"

export const EventForm = props => {
    const { createEvent } = useContext(EventContext)

    const [ currentEvent, setCurrentEvent] = useState({
        day: "",
        time: "",
        location: "",
        finalScore: "",
        eventSchedule: "",
    })

    const handleControlledInputChange = (e) => {
        const newEventState = Object.assign({}, currentEvent)
        newEventState[e.target.name] = e.target.value
        setCurrentEvent(newEventState)
    }

    return (
        <form className="eventForm">
        <h2 className="eventForm__eventTitle">Register New Event</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="day">Event Day: </label>
                <input type="text" name="day" required autoFocus className="form-control"
                    value={currentEvent.day}
                    onChange={handleControlledInputChange}
                />
            </div>
        </fieldset>

        </form>
    )
}