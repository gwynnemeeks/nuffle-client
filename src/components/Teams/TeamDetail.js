/* eslint-disable react-hooks/exhaustive-deps */
// What is this component doing?
// I want it to display details about the team, turn player roster into a link/button
import React, { useContext, useEffect, useState } from "react"

import { TeamContext } from "./TeamProvider"

export const TeamDetails = (props) => {
    const { teams, getSingleTeam, deleteTeam } = useContext(TeamContext)

    const [setTeam] = useState()
    // {coach: {}, league: {}}

    useEffect(() => {
        const teamId = parseInt(props.match.params.teamId)
        getSingleTeam(teamId)
            .then(setTeam)
    }, [])

    return (
        <section className="team">
            {/* <h2 className="team__league_name">{teams.league.league_name}</h2> */}
            <h3 className="team__team_name">Team: {teams.team_name}</h3>
            {/* <h4 className="team__coach">Coach: {teams.coach.title}</h4> */}
            <p className="team__team_type">Race: {teams.team_type}</p>
            <p className="team__team_value">Valued at: {teams.team_value} GP</p>
            <button onClick={() => deleteTeam(teams.id).then(() => props.history.push("/teams"))} >Delete Team</button>
        </section>
    )
}