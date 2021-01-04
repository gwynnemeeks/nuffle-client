/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react"
import { LeagueContext } from "./LeagueProvider"
import { Link } from "react-router-dom"
import "./Leagues.scss"

export const LeagueList = (props) => {
    const { leagues, getLeagues } = useContext(LeagueContext)

    useEffect(() => {
        getLeagues()
    }, [])

    return (
        <div className="leagues">
            <h1>Your Leagues</h1>
            <button className="btn btn-light"
                onClick={() => {
                    props.history.push({ pathname: "/leagues/new" })
                }}
            >Register New League</button>

            <article className="leagueList">
                {
                    leagues.map(lea => {
                        return <Link key={lea.id} to={`/leagues/${lea.id}`}>
                            <h3>{lea.league_name}</h3>
                        </Link>
                    })
                }
            </article>
        </div>
    )
}