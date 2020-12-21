/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react"
import { PlayerContext } from "./PlayerProvider"
import { Player } from "./Players"
import "./Players.scss"

export const PlayerList = (props) => {
    const { players, getPlayers } = useContext(PlayerContext)

    useEffect(() => {
        getPlayers()
    }, [])
        
    return(
        <div className="players">
            <h1>Team Roster</h1>
            <button className="btn btn-light"
            onClick={() => {
            props.history.push({ pathname: "/players/new" })
            }}
            >Register New Player</button>
            {
                players.map(play => <Player key={play.id} player={play} />)
            }
        </div>
    )
        }