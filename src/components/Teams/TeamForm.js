/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from "react"
import { TeamContext } from "./TeamProvider.js"
import { LeagueContext } from "../Leagues/LeagueProvider.js"

export const TeamForm = props => {
    const { createTeam } = useContext(TeamContext)
    const { getLeagues, leagues } = useContext(LeagueContext)

    const [currentTeam, setCurrentTeam] = useState({
        teamName: "",
        teamType: "",
        teamRank: 0,
        teamValue: 0,
        teamRerolls: 0,
        fanFactor: 0,
        leagueId: 0
    })

    useEffect(() => {
        getLeagues()
    }, [])

    const handleControlledInputChange = (e) => {
        const newTeamState = Object.assign({}, currentTeam)
        newTeamState[e.target.name] = e.target.value
        setCurrentTeam(newTeamState)
    }

    return (
        <form className="teamForm">
        <h2 className="teamForm__teamTitle">Register New team</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="teamName">Team Name: </label>
                <input lea="text" name="teamName" required autoFocus className="form-control"
                    value={currentTeam.teamName}
                    onChange={handleControlledInputChange}
                />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="teamType">Team Type: </label>
                <input lea="text" name="teamType" required autoFocus className="form-control"
                    value={currentTeam.teamType}
                    onChange={handleControlledInputChange}
                />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="teamRank">Team Rank: </label>
                <input lea="text" name="teamRank" required autoFocus className="form-control"
                    value={currentTeam.teamRank}
                    onChange={handleControlledInputChange}
                />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="teamValue">Team Value: </label>
                <input lea="text" name="teamValue" required autoFocus className="form-control"
                    value={currentTeam.teamValue}
                    onChange={handleControlledInputChange}
                />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="teamRerolls">Team Rerolls: </label>
                <input lea="text" name="teamRerolls" required autoFocus className="form-control"
                    value={currentTeam.teamRerolls}
                    onChange={handleControlledInputChange}
                />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="fanFactor">Fan Factor: </label>
                <input lea="text" name="fanFactor" required autoFocus className="form-control"
                    value={currentTeam.fanFactor}
                    onChange={handleControlledInputChange}
                />
            </div>
        </fieldset>
        <fieldset>
                <div className="form-group">
                    <label htmlFor="leagueId">League: </label>
                    <select name="leagueId" className="form-control"
                        value={currentTeam.leagueId}
                        onChange={handleControlledInputChange}>
                        <option value="0">Select a league</option>
                        {
                            leagues.map(lea => (
                                <option key={lea.id} value={lea.id}> {lea.league_name} </option>
                            ))
                        }
                    </select>
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const team = {
                        teamName: currentTeam.teamName,
                        teamType: currentTeam.teamType,
                        teamRank: parseInt(currentTeam.teamRank),
                        teamValue: parseInt(currentTeam.teamValue),
                        teamRerolls: parseInt(currentTeam.teamRerolls),
                        fanFactor: parseInt(currentTeam.fanFactor),
                        leagueId: parseInt(currentTeam.leagueId)
                    }

                    // Send POST request to your API
                    createTeam(team)
                    props.history.push("/team")
                }}
                className="btn btn-primary">Create</button>
        </form>
    )
}