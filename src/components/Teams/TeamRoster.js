/* eslint-disable react-hooks/exhaustive-deps */
// What is this component doing?
// I want it to display details about the team--including player
import React, { useContext, useEffect } from "react"

import { PlayerContext } from "../Players/PlayerProvider"

export const TeamRoster = (props) => {
    const { players, getPlayersByTeamId } = useContext(PlayerContext)



    useEffect(() => {
        getPlayersByTeamId(props.match.params.teamId)
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