import React from "react"
import "./Teams.scss"

export const Team = ({ team }) => (
    <section className="team">
        <div className="card w-50">
        <div className="card-body">
        <h5 className="card-title">{team.team_name}</h5>
    <p className="card-text">{team.team_value}</p>
    <button class="btn btn-primary">Team Roster</button>
    </div>
    </div>
    </section>
)