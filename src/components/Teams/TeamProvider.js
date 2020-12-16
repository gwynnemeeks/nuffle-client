import React, { useState, useEffect } from "react"

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
}