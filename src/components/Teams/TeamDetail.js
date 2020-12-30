/* eslint-disable react-hooks/exhaustive-deps */
// What is this component doing?
// I want it to display details about the team--including player roster
import React, { useContext, useEffect } from "react"

import { PlayerContext } from "../Players/PlayerProvider"
import { TeamContext } from "./TeamProvider"

export const TeamDetails = (props) => {
    const { players, getPlayersByTeamId } = useContext(PlayerContext)
    const { teams, getTeams } = useContext(TeamContext)

    useEffect(() => {
        getPlayersByTeamId(props.match.params.teamId)
    }, [])

    useEffect(() => {
        getTeams(props.match.params.teamId)
    }, [])

    return (
        <>
            {
                players.map(play => {
                    return <div><h3>{play.name}</h3></div>

                })
            }
        </>
    )
}