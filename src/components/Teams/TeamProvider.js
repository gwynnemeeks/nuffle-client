// everything to do with data is here also handling state
// manages state of the application
import React, { useState } from "react"

export const TeamContext = React.createContext()

export const TeamProvider = (props) => {
    const [teams, setTeams] = useState([])

    const getTeams = () => {
        return fetch("http://localhost:8000/teams", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("token")}`
            }
    })
        .then(response => response.json())
        .then(setTeams)
    }

    const getSingleTeam = (teamId) => {
        return fetch(`http://localhost:8000/teams?teamId=${teamId}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("token")}`
        }})
        .then(res => res.json())
        .then(setTeams)
    }

    const createTeam = team => {
        return fetch("http://localhost:8000/teams", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(team)
        })
        .then(response => response.json())
        .then(getTeams)
    }

    return (
        <TeamContext.Provider value={{
            teams, getTeams, createTeam, getSingleTeam
        }}>
            {props.children}
        </TeamContext.Provider>
    )
}