// everything to do with data is here also handling state
// manages state of the application
import React, { useState } from "react"

export const TeamContext = React.createContext()

export const TeamProvider = (props) => {
    const [teams, setTeams] = useState([])
    const [singleTeam, setSingleTeam] = useState({coach: {}, league: {}})

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

    const getSingleTeam = (id) => {
        return fetch(`http://localhost:8000/teams/${id}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("token")}`
            }
        })
            .then(res => res.json())
            .then(setSingleTeam)
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

    const deleteTeam = (id) => {
        return fetch(`http://localhost:8000/teams/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("token")}`
            },
        })
            .then(getTeams)
    }

    const updateTeam = team => {
        return fetch(`http://localhost:8000/teams/${team.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(team)
        })
            .then(getTeams)
    }

    return (
        <TeamContext.Provider value={{
            teams, getTeams, createTeam, getSingleTeam, deleteTeam, updateTeam, singleTeam
        }}>
            {props.children}
        </TeamContext.Provider>
    )
}