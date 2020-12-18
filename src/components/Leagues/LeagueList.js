/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react"
import { LeagueContext } from "./LeagueProvider"
import { League } from "./Leagues"
import "./Leagues.scss"

export const LeagueList = () => {
    const { leagues, getLeagues } = useContext(LeagueContext)

    useEffect(() => {
        getLeagues()
    }, [])

    console.warn(LeagueList)

    return(
        <div className="leagues">
            {
                leagues.map(lea => <League key={lea.id} league={lea} />)
            }
        </div>
    )
}