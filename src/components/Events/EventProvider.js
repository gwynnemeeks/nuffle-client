import React, { useState } from "react"

export const EventContext = React.createContext()

export const EventProvider = (props) => {
    const [events, setEvents] = useState([])

    const getEvents = () => {
        return fetch("http://localhost:8000/events", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("token")}`
            }
    })
        .then(response => response.json())
        .then(setEvents)
    }

    const createEvent = event => {
        return fetch("http://localhost:8000/Events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(Event)
        })
        .then(response => response.json())
        .then(getEvents)
    }

    return (
        <EventContext.Provider value={{
            events, getEvents, createEvent
        }}>
            {props.children}
        </EventContext.Provider>
    )
}