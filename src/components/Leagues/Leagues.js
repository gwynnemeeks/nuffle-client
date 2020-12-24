import React from "react"
import "./Leagues.scss"

export const League = ({ league }) => (
    <section className="leagues">
        <div className="card-body">
        <h5 className="card-title">{league.league_name}</h5>
    </div>

    </section>
)