/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { TeamContext } from "./TeamProvider"
import "./Teams.scss"

export const TeamList = (props) => {
    const { teams, getTeams, singleTeam, getSingleTeam } = useContext(TeamContext)

    useEffect(() => {
        getSingleTeam()
    }, [])

    useEffect(() => {
        getTeams()
    }, [])


    return (
        <>
            <div className="teams">
                <article className="teamList">
                    <div className="card mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <h3>{singleTeam.coach.title}</h3>
                                <button className="btn btn-light"
                                    onClick={() => {
                                        props.history.push({ pathname: "/teams/new" })
                                    }}
                                >Register New Team</button>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h1>Your Teams</h1>
                                    {
                                        teams.map(tea => {
                                            return <Link key={tea.id} to={`/teams/${tea.id}`}>
                                                <h3>{tea.team_name}</h3>
                                            </Link>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </>
    )
}