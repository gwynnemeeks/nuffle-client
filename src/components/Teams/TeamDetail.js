/* eslint-disable react-hooks/exhaustive-deps */
// What is this component doing?
// I want it to display details about the team turn player roster into a link/button
import React, { useContext, useEffect, useState } from "react"

import { TeamContext } from "./TeamProvider"

export const TeamDetails = (props) => {
    const { getSingleTeam } = useContext(TeamContext)

    const [teams, setTeam] = useState({ coach: {}, league: {}})

    useEffect(() => {
        const teamId = parseInt(props.match.params.id)
        getSingleTeam(teamId)
            .then(setTeam)
    }, [])

    return (
        <section className="team">
            {/* <h2 className="team__league_name">{teams.league.league_name}</h2> */}
            <h3 className="team__team_name">{teams.team_name}</h3>
            {/* <p className="team__coach_title">{teams.coach.title}</p> */}
            <p className="team__team_value">Value: {teams.team_value}</p>
            <p className="team__team_type">Race: {teams.team_type}</p>
            
        </section>
    )
}