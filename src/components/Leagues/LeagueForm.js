import React, { useContext, useState } from "react"
import { LeagueContext } from "./LeagueProvider"

export const LeagueForm = props => {
    const { createLeague } = useContext(LeagueContext)

    const [currentLeague, setCurrentLeague] = useState({
        leagueName: ""
    })

    const handleControlledInputChange = (e) => {
        const newLeagueState = Object.assign({}, currentLeague)
        newLeagueState[e.target.name] = e.target.value
        setCurrentLeague(newLeagueState)
    }

    return (
        <form className="leagueForm">
        <h2 className="leagueForm__leagueTitle">Register New League</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="leagueName">League Name: </label>
                <input type="text" name="leagueName" required autoFocus className="form-control"
                    value={currentLeague.leagueName}
                    onChange={handleControlledInputChange}
                />
            </div>
        </fieldset>
        <button type="submit"
            onClick={evt => {
                evt.preventDefault()

                const league = {
                    leagueName: currentLeague.leagueName
                }

                createLeague(league)
                props.history.push("/leagues")
            }}
            className="btn btn-primary">Create</button>
            </form>
    )
}