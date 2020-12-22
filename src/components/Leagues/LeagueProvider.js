import React, { useState } from "react"

export const LeagueContext = React.createContext()

export const LeagueProvider = (props) => {
    const [leagues, setLeagues] = useState([])

    const getLeagues = () => {
        return fetch("http://localhost:8000/leagues", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("token")}`
            }
    })
        .then(response => response.json())
        .then(setLeagues)
    }

    const createLeague = leagues => {
        return fetch("http://localhost:8000/leagues", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(leagues)
        })
        .then(response => response.json())
        .then(getLeagues)
    }

    return (
        <LeagueContext.Provider value={{
            leagues, getLeagues, createLeague
        }}>
            {props.children}
        </LeagueContext.Provider>
    )
}