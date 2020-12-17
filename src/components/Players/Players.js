import React from "react"
import "./Players.scss"

export const Player = ({ players }) => (
    <section className="player">
        <h3 className="player__name">{players.name}</h3>
        <p className="player__position">{players.position}</p>
        <p className="player__history">{players.history}</p>
    </section>
)