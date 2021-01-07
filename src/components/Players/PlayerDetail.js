/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react"


import { PlayerContext } from "../Players/PlayerProvider"

export const PlayerDetails = (props) => {
    const { getSinglePlayer, deletePlayer, singlePlayer } = useContext(PlayerContext)

    useEffect(() => {
        const playerId = parseInt(props.match.params.playerId)
        getSinglePlayer(playerId)
    }, [])

    return (
        <>
            <section className="player">
                <h3 className="player__name">Name: {singlePlayer.name}</h3>
                <h4 className="card-text">Position: {singlePlayer.position}</h4>
                <ul className="list-group list-group-flush">
                <li className="list-group-item">AG: {singlePlayer.agility}</li>
                <li className="list-group-item">AV: {singlePlayer.armor_value}</li>
                <li className="list-group-item">ST: {singlePlayer.strength}</li>
                <li className="list-group-item">MV: {singlePlayer.movement}</li>
            </ul>
            <button className="btn btn-light" onClick={() => deletePlayer(singlePlayer.id).then(() => props.history.push("/players"))} >Delete Player</button>
            <button className="btn btn-dark" onClick={() => {props.history.push(`/teams/players/edit/${singlePlayer.id}`)}}>Edit Player</button>
        </section>
        </>
    )
}