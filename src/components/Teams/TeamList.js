/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { TeamContext } from "./TeamProvider"
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

        <article className="teamList">
            {
                teams.map(tea => {
                return <Link key={tea.id} to={`/teams/${tea.id}`}>
                    <h3>{tea.team_name}</h3>
                    </Link>
            })
        }
            </article>
        </div>
    )
}