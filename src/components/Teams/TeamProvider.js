import React, { useState } from "react"

export const TeamContext = React.createContext()

export const TeamProvider = (props) => {
    const [teams, singleTeam, setTeams] = useState([])

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

    const getSingleTeam = (team) => {
        return fetch(`http://localhost:8000/teams/${team}`, {
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
            teams, getTeams, createTeam, singleTeam, getSingleTeam
        }}>
            {props.children}
        </TeamContext.Provider>
    )
}