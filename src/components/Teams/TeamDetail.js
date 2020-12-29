import React, { useState, useContext, useEffect } from "react"
import { Link } from "react-router-dom"

import { TeamContext } from "./TeamProvider"
import { PlayerContext } from "../Players/PlayerProvider"

export const TeamDetails = (props) => {
    const { singleTeam, getSingleTeam } = useContext(TeamContext)
    const { getPlayers } = useContext(PlayerContext)

    let teamId = getSingleTeam()

    useEffect(() => {
        getSingleTeam(teamId)
            .then(getPlayers)
    }, [])

    if (singleTeam) {
        return (
            <>
                <div>
                    <article className="teamDetailsContainer">
                        <article className="teamDetails">
                            <div className="teamName">{singleTeam.team_name}</div>
                            <div className="teamType">{singleTeam.team_type}</div>

                        </article>
                    </article>
                </div>
                </>
        )
    }
}