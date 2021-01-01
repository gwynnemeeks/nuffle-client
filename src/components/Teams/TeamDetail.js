/* eslint-disable react-hooks/exhaustive-deps */
// What is this component doing?
// I want it to display details about the team--including player roster
import React, { useContext, useEffect } from "react"

import { PlayerContext } from "../Players/PlayerProvider"
import { TeamContext } from "./TeamProvider"
import { Team } from "./Teams"

export const TeamDetails = (props) => {
    const { players, getPlayersByTeamId } = useContext(PlayerContext)
    const { teams, getSingleTeam } = useContext(TeamContext)

    useEffect(() => {
        getPlayersByTeamId(props.match.params.teamId)
    }, [])

    useEffect(() => {
        getSingleTeam(props.match.params.id)
    }, [])

    return (
        <>
        <div className="teamDetail">
            <section className="teamStats">
            <article className="teamMap">

            </article>
            </section>

        </div>            
            <article className="playerRoster">
            {
                players.map(play => {
                    return <div><h3>{play.name}</h3></div>

                })
            }
            </article>
            
        </>
    )
}