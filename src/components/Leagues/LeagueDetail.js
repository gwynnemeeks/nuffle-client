/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react"

import { LeagueContext } from "./LeagueProvider"

export const LeagueDetails = (props) => {
    const { leagues, getSingleLeague, deleteLeague, singleLeague } = useContext(LeagueContext)

    useEffect(() => {
        const leagueId = parseInt(props.match.params.leagueId)
        getSingleLeague(leagueId)
    }, [])

    return (
        <section className="league">
        <h3 className="league__league_name">Name: {singleLeague.league_name}</h3>
        <button className="btn btn-light" onClick={() => deleteLeague(leagues.id).then(() => props.history.push("/leagues"))} >DeleteLeague</button>
        <button className="btn btn-dark" onClick={() => {
            props.history.push(`/leagues/edit/${singleLeague.id}`)
        }}>Edit League</button>
        </section>
    )
    
}