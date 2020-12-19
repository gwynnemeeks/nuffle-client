/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react"
import { TeamContext } from "./TeamProvider"
import { Team } from "./Teams"
import "./Teams.scss"

export const TeamList = (props) => {
    const { teams, getTeams } = useContext(TeamContext)

    useEffect(() => {
        getTeams()
    }, [])

    return(
        <div className="teams">
            <h1>Your Teams</h1>
            <button className="btn btn-light"
        onClick={() => {
        props.history.push({ pathname: "/teams/new" })
        }}
        >Register New Team</button>
            {
                teams.map(tea => <Team key={tea.id} team={tea} />)
            }
        </div>
    )
}