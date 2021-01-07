/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react"


import { PlayerContext } from "../Players/PlayerProvider"

export const PlayerDetails = (props) => {
    const { players, getSinglePlayer, deletePlayer } = useContext(PlayerContext)

    const [setPlayer] = useState()

    useEffect(() => {
        const playerId = parseInt(props.match.params.playerId)
        getSinglePlayer(playerId)
            .then(setPlayer)
    }, [])

    return (
        <>
            <section className="player">
                <h3 className="player__name">Name: {players.name}</h3>
                <h4 className="card-text">Position: {players.position}</h4>
                <ul className="list-group list-group-flush">
                <li className="list-group-item">AG: {players.agility}</li>
                <li className="list-group-item">AV: {players.armor_value}</li>
                <li className="list-group-item">ST: {players.strength}</li>
                <li className="list-group-item">MV: {players.movement}</li>
            </ul>
            <button className="btn btn-light" onClick={() => deletePlayer(players.id).then(() => props.history.push("/players"))} >Delete Player</button>
            <button className="btn btn-dark" onClick={() => {props.history.push(`/teams/players/edit/${players.id}`)}}>Edit Player</button>
        </section>
        </>
    )
}