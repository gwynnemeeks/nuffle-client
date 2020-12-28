import React from "react"
import { Link } from "react-router-dom"
import "./Teams.scss"

export const Team = ({ team }) => (
    <div className="team">
        <div className="card w-50">
        <div className="card-body">
        <div className="teamDetail">
        <h3 className="team__name">{team.team_name}</h3>
        <p className="team__type">{team.team_type}</p>
        <p className="team__value">{team.team_value}</p>
    <button className="btn btn-light"
    ><Link to="/players">Team Roster</Link></button>
    </div>
    </div>
    </div>
    </div>
)