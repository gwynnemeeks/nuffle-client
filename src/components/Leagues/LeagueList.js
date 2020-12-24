/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react"
import { LeagueContext } from "./LeagueProvider"
import { League } from "./Leagues"
import "./Leagues.scss"

export const LeagueList = (props) => {
    const { leagues, getLeagues } = useContext(LeagueContext)

    useEffect(() => {
        getLeagues()
    }, [])

    return(
        <div className="leagues">
             <h1>Your Leagues</h1>
            <button className="btn btn-light"
            onClick={() => {
            props.history.push({ pathname: "/leagues/new" })
            }}
            >Register New League</button>
            {
                leagues.map(lea => <League key={lea.id} league={lea} />)
            }
        </div>
    )
}