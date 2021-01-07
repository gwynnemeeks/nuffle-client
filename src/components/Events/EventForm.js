/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react"
import { EventContext } from "./EventProvider"

export const EventForm = props => {
    const { createEvent, updateEvent, events, getEvents, singleEvent } = useContext(EventContext)

    const [currentEvent, setCurrentEvent] = useState({})

    const editMode = props.match.params.hasOwnProperty("eventId")

    const handleControlledInputChange = (e) => {
        const newEventState = Object.assign({}, currentEvent)
        newEventState[e.target.name] = e.target.value
        setCurrentEvent(newEventState)
    }

    const getEventInEditMode = () => {
        if (editMode) {
            const eventId = parseInt(props.match.params.eventId)
            const singleEvent = events.find(e => e.id === eventId) || {}
            setCurrentEvent(singleEvent)
        }
    }

    useEffect(() => {
        getEvents()
    }, [])

    useEffect(() => {
        getEventInEditMode()
    }, [singleEvent])

    const registerNewEvent = () => {
        if (editMode) {
            updateEvent({
                id: currentEvent.id,
                day: currentEvent.day,
                time: currentEvent.time,
                location: currentEvent.location,
                finalScore: currentEvent.final_score,
                eventSchedule: currentEvent.event_schedule,
                coach: parseInt(localStorage.getItem("token"))
            })
                .then(() => props.history.push(`/events/${currentEvent.id}`))

        } else {
            createEvent(currentEvent)
                .then(() => props.history.push("/events"))
        }
    }

    return (
        <form className="col-6 offset-3">
            <h2 className="eventForm__eventTitle">{editMode ? "Update Event" : "Register New Event"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="day">Event Day: </label>
                    <input type="text" name="day" required autoFocus className="form-control"
                        defaultValue={currentEvent.day}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="time">Event Time: </label>
                    <input type="text" name="time" required autoFocus className="form-control"
                        defaultValue={currentEvent.time}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Event Location: </label>
                    <input type="text" name="location" required autoFocus className="form-control"
                        defaultValue={currentEvent.location}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="finalScore">Event Final Score: </label>
                    <input type="text" name="final_score" required autoFocus className="form-control"
                        defaultValue={currentEvent.final_score}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="eventSchedule">Event Event Schedule: </label>
                    <input type="text" name="event_schedule" required autoFocus className="form-control"
                        defaultValue={currentEvent.event_schedule}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()
                    registerNewEvent()

                }}
                className="btn btn-primary">
                {editMode ? "Save Changes" : "Register New Event"}
            </button>
        </form>
    )
}