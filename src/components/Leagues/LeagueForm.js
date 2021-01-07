/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react"

import { LeagueContext } from "./LeagueProvider"

export const LeagueForm = props => {
    const { createLeague, updateLeague, leagues, getLeagues, singleLeague } = useContext(LeagueContext)

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
            const singleLeague = leagues.find(l => l.id === leagueId) || {}
            setCurrentLeague(singleLeague)
        }
    }

    useEffect(() => {
        getLeagues()
    }, [])

    useEffect(() => {
        getLeagueInEditMode()
    }, [singleLeague])

    const createNewLeague = () => {

        if (editMode) {
            // debugger
            updateLeague({
                id: currentLeague.id,
                leagueName: currentLeague.league_name,
                coach: parseInt(localStorage.getItem("token"))
            })
                .then(() => props.history.push(`/leagues/${currentLeague.id}`))

        } else {
            createLeague(currentLeague)
                .then(() => props.history.push("/leagues"))
        }
    }


    return (
        <form className="col-6 offset-3">
            <h2 className="leagueForm__leagueTitle">{editMode ? "Update League" : "Register New League"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="leagueName">League Name: </label>
                    <input type="text" name="league_name" required autoFocus className="form-control"
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