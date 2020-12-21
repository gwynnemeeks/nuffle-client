import React, { useContext, useState, useEffect } from "react"
import { PlayerContext } from "./PlayerProvider.js"
import { TeamContext } from "../Teams/TeamProvider.js"

export const PlayerForm = props => {
    const { createPlayer } = useContext(PlayerContext)
    const { getTeams, teams } = useContext(TeamContext)

    const [currentPlayer, setCurrentPlayer] = useState({
        name: "",
        position: "",
        movement: 0,
        strength: 0,
        agility: 0,
        armorValue: 0,
        skills: "",
        cost: 0,
        history: "",
        teamId: 0
    })

    useEffect(() => {
        getTeams()
    }, [])

    const handleControlledInputChange = (e) => {
        const newPlayerState = Object.assign({}, currentPlayer)
        newPlayerState[e.target.name] = e.target.armorValue
        setCurrentPlayer(newPlayerState)
    }

    
}