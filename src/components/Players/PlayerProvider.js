import React, { useState } from "react"

export const PlayerContext = React.createContext()

export const PlayerProvider = (props) => {
    const [players, setPlayers] = useState([{name: ''}])
    const [singlePlayer, setSinglePlayer] = useState({})

    const getPlayers = () => {
        return fetch("http://localhost:8000/players", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("token")}`
            }
    })
        .then(response => response.json())
        .then(setPlayers)
    }
    
    const getPlayersByTeamId = (teamId) => {
        return fetch(`http://localhost:8000/players?teamId=${teamId}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("token")}`
            }
    })
        .then(response => response.json())
        .then(setPlayers)
    }

    const getSinglePlayer = (id) => {
        return fetch(`http://localhost:8000/teams/players/${id}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("token")}`
        }})
        .then(res => res.json())
        .then(setSinglePlayer)
    }

    const createPlayer = player => {
        return fetch("http://localhost:8000/players", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(player)
        })
        .then(response => response.json())
        .then(getPlayers)
    }

    const deletePlayer = (id) => {
        return fetch(`http://localhost:8000/players/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("token")}`
            },
        })
            .then(getPlayers)
    }

    const updatePlayer = player => {
        return fetch(`http://localhost:8000/players/${player.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(player)
        })
            .then(getPlayers)
    }

    return (
        <PlayerContext.Provider value={{
            players, getPlayers, createPlayer, getPlayersByTeamId, getSinglePlayer, updatePlayer, deletePlayer, singlePlayer
        }}>
            {props.children}
        </PlayerContext.Provider>
    )
}