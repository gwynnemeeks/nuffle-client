/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react"

import { LeagueContext } from "./LeagueProvider"

export const LeagueForm = props => {
    const { createLeague, updateLeague, leagues, getLeagues } = useContext(LeagueContext)

    const [currentLeague, setCurrentLeague] = useState({})

    const editMode = props.match.params.hasOwnProperty("leagueId")

    const handleControlledInputChange = (e) => {
        const newLeagueState = Object.assign({}, currentLeague)
        newLeagueState[e.target.name] = e.target.value
        setCurrentLeague(newLeagueState)
    }

    const getLeagueInEditMode = () => {
        // debugger
        if (editMode) {
            const leagueId = parseInt(props.match.params.leagueId)
            const selectedLeague = leagues.find(l => l.id === leagueId) || {}
            setCurrentLeague(selectedLeague)
        }
    }

    useEffect(() => {
        getLeagues()
    }, [])

    useEffect(() => {
        getLeagueInEditMode()
    }, [currentLeague])

    const createNewLeague = () => {

        if (editMode) {
            // debugger
            updateLeague({
                id: leagues.id,
                leagueName: leagues.league_name,
                coach: parseInt(localStorage.getItem("token"))
            })
                .then(() => props.history.push(`/leagues/${leagues.id}`))

        } else {
            createLeague({
                leagueName: leagues.league_name
            })
                .then(() => props.history.push("/leagues"))
        }
    }

    return (
        <form className="col-6 offset-3">
            <h2 className="leagueForm__leagueTitle">{editMode ? "Update League" : "Register New League"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="leagueName">League Name: </label>
                    <input type="text" name="leagueName" required autoFocus className="form-control"
                        defaultValue={currentLeague.league_name}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    createNewLeague()

                }}
                className="btn btn-dark">
                {editMode ? "Save Updates" : "Create New League"}
            </button>
        </form>
    )
}