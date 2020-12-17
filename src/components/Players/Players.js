import React from "react"
import "./Players.scss"

export const Player = ({ player }) => (
    <section className="player">
        <h3 className="player__name">{player.name}</h3>
        <p className="player__position">{player.position}</p>
        <p className="playes__history">{player.history}</p>
    </section>
)