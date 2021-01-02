/* eslint-disable react-hooks/exhaustive-deps */
// What is this component doing?
// I want it to display details about the team turn player roster into a link/button
import React, { useContext, useEffect, useState } from "react"

import { TeamContext } from "./TeamProvider"

export const TeamDetails = (props) => {
    const { getSingleTeam } = useContext(TeamContext)

    const [team, setTeam] = useState({ coach: {}, league: {}})

    useEffect(() => {
        const teamId = parseInt(props.match.params.teamId)
        getSingleTeam(teamId)
            .then(setTeam)
    }, [])

    return (
        <section className="team">
            <h3 className="team__team_name">{team.team_name}</h3>
            <p className="team__team_value">Value: {team.team_value}</p>
            <p className="team__team_type">Race: {team.team_type}</p>
            
        </section>
    )
}