/* eslint-disable react-hooks/exhaustive-deps */
// What is this component doing?
// I want it to display details about the team, turn player roster into a link/button
import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"

import { PlayerContext } from "../Players/PlayerProvider"
import { TeamContext } from "./TeamProvider"

import "./Teams.scss"

export const TeamDetails = (props) => {
    const { getSingleTeam, deleteTeam, singleTeam } = useContext(TeamContext)
    const { players, getPlayersByTeamId } = useContext(PlayerContext)

  
    useEffect(() => {
        const teamId = parseInt(props.match.params.teamId)
        getSingleTeam(teamId)
    }, [])

    useEffect(() => {
        getPlayersByTeamId(props.match.params.teamId)
    }, [])

    return (
        <>
        <section className="team">
        <div className="col-6 offset-3">
            <h2 className="team__league_name">{singleTeam.league.league_name}</h2>
            <h3 className="team__team_name">Team: {singleTeam.team_name}</h3>
            <h4 className="team__coach">Coach: {singleTeam.coach.title}</h4>
            <p className="team__team_type">Type of Players: {singleTeam.team_type}</p>
            <p className="team__team_value">Valued at: {singleTeam.team_value} GP</p>
            <button className="btn btn-light" onClick={() => deleteTeam(singleTeam.id).then(() => props.history.push("/teams"))} >Delete Team</button>
            <button className="btn btn-dark" onClick={() => {props.history.push(`/teams/edit/${singleTeam.id}`)}}>Edit Team</button>
            <h3 className="team__roster">Team Roster: </h3>
            
            {
                players.map(play => {
                    return <Link key={play.id} to={`players/${play.id}`}>
                        <h3>{play.name}</h3>
                        </Link>
                })
            }
            <button className="btn btn-warning" onClick={() => {props.history.push("/players/new")}} >Create Player</button>
            </div>
        </section>
        </>
    )
}