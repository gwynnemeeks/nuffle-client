/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from "react"
// import { Link } from "react-router-dom"

import { TeamContext } from "./TeamProvider"
import { PlayerContext } from "../Players/PlayerProvider"

export const TeamDetails = (props) => {
    const { teams, getSingleTeam } = useContext(TeamContext)
    const { players, getPlayers } = useContext(PlayerContext)

    const [singleTeam, setTeam ] = useState({})
    const [setPlayers] = useState({})


    useEffect(() => {
        getSingleTeam()
            .then(getPlayers)
    }, [])

    useEffect(() => {
        const team = singleTeam.find(t => t.id === parseInt(props.match.params.teamId)) || {}
        setTeam(team)
    }, [teams])

    useEffect(() => {
        const player = players.find(p => p.id === player.teamId) || {}
        setPlayers(player)
    }, [players])

        return (
            <section className="teamDetailsContainer">
                        <article className="teamDetails">
                            <div className="teamName">{singleTeam.team_name}</div>
                        </article>
                    </section>

                )
    }