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

    const getSingleEvent = (id) => {
        return fetch(`http://localhost:8000/events/${id}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("token")}`
            }
        })
            .then(res => res.json())
            .then(setEvents)
    }

    const createEvent = event => {
        return fetch("http://localhost:8000/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(event)
        })
        .then(response => response.json())
        .then(getEvents)
    }

    const deleteEvent = (id) => {
        return fetch(`http://localhost:8000/events/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("token")}`
            },
        })
            .then(getEvents)
    }

    const updateEvent = event => {
        return fetch(`http://localhost:8000/events/${event.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(event)
        })
            .then(getEvents)
    }

    return (
        <EventContext.Provider value={{
            events, getEvents, createEvent, getSingleEvent, deleteEvent, updateEvent
        }}>
            {props.children}
        </EventContext.Provider>
    )
}