/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react"

import { LeagueContext } from "./LeagueProvider"

export const LeagueDetails = (props) => {
    const { leagues, getSingleLeague, deleteLeague } = useContext(LeagueContext)

    const [setLeague] = useState()

    useEffect(() => {
        const leagueId = parseInt(props.match.params.leagueId)
        getSingleLeague(leagueId)
        .then(setLeague)
    }, [])

    return (
        <section className="league">
        <h3 className="league__league_name">Name: {leagues.league_name}</h3>
        <button className="btn btn-light" onClick={() => deleteLeague(leagues.id).then(() => props.history.push("/leagues"))} >DeleteLeague</button>
        </section>
    )
    
}