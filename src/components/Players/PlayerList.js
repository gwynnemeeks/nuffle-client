/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react"
import { PlayerContext } from "./PlayerProvider"
import { Player } from "./Players"
import "./Players.scss"

export const PlayerList = () => {
    const { players, getPlayers } = useContext(PlayerContext)

    useEffect(() => {
        getPlayers()
    }, [])

    useEffect(() => {
        console.log(players)
    }, [players])

    return(
        <div className="players">
            {
                players.map(play => <Player key={play.id} Player={play} />)
            }
        </div>
    )
}