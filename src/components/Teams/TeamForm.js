import React, { useContext, useState, useEffect } from "react"
import { TeamContext } from "./TeamProvider.js"

export const TeamForm = props => {
    const { createTeam } = useContext(TeamContext)

    const [currentTeam, setCurrentTeam] = useState({
        teamName: "",
        coach: 1,
        teamType: "",
        teamRank: 0,
        teamValue: 0,
        teamRerolls: 0,
        fanFactor: 0,
        leagueId: 1
    })

    const handleControlledInputChange = (e) => {
        const newTeamState = Object.assign({}, currentTeam)
        newTeamState[e.target.name] = e.target.value
        setCurrentTeam(newTeamState)
    }

    return (

    )
}