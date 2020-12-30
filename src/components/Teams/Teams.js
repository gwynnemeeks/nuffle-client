import React from "react"
// import { Link } from "react-router-dom"
import "./Teams.scss"

export const Team = ({ team }) => (
    <div className="team">
        <div className="card w-50">
        <div className="card-body">
        <div className="teamDetail">
        <h3 className="team__name">{team.team_name}</h3>
    {/* <button className="btn btn-light"
    ><Link to={{ pathname: `"/teams/${team.id}"` }}>Team Roster</Link></button> */}
    </div>
    </div>
    </div>
    </div>
)