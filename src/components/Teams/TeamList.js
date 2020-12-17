/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react"
import { TeamContext } from "./TeamProvider"
import { Team } from "./Teams"
import "./Teams.scss"

export const TeamList = () => {
    const { teams, getTeams } = useContext(TeamContext)

    useEffect(() => {
        getTeams()
    }, [])

    return(
        <div className="teams">
            {
                teams.map(tea => <Team key={tea.id} team={tea} />)
            }
        </div>
    )
}