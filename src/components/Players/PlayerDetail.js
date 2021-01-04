/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react"


import { PlayerContext } from "../Players/PlayerProvider"

export const PlayerDetails = (props) => {
    const { players, getSinglePlayer } = useContext(PlayerContext)

    const [setPlayer] = useState()

    useEffect(() => {
        const playerId = parseInt(props.match.params.playerId)
        getSinglePlayer(playerId)
            .then(setPlayer)
    }, [])

    return (
        <section className="player">
            <h3 className="player__name">Name: {players.name}</h3>
        </section>
    )
}