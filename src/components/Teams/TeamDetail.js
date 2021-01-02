/* eslint-disable react-hooks/exhaustive-deps */
// What is this component doing?
// I want it to display details about the team turn player roster into a link/button
import React, { useContext, useEffect, useState } from "react"

import { TeamContext } from "./TeamProvider"

export const TeamDetails = (props) => {
    const { getSingleTeam } = useContext(TeamContext)

    const [teams, setTeam] = useState()

    useEffect(() => {
        const teamId = parseInt(props.match.params.teamId)
        getSingleTeam(teamId)
            .then(setTeam)
    }, [])

    return (
        <section className="teamDetail">
            <h3 className="team__teamName">{teams.team_name}</h3>
        </section>
    )
}