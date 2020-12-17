import React from "react"
import "./Teams.scss"

export const Team = ({ team }) => (
    <section className="team">
        <div class="card w-50">
        <div class="card-body">
        <h5 class="card-title">{team.team_name}</h5>
    <p class="card-text">{team.team_value}</p>
    <button class="btn btn-primary">Team Roster</button>
    </div>
    </div>
    </section>
)