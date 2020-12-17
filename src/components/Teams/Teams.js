import React from "react"
import "./Teams.scss"

export const Team = ({ team }) => (
    <section className="team">
        <h3 className="team__team_name">{team.team_name}</h3>
        <p className="team__team_value">{team.team_value}</p>
    </section>
)