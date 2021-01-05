/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from "react"
import { TeamContext } from "./TeamProvider.js"
import { LeagueContext } from "../Leagues/LeagueProvider.js"

export const TeamForm = props => {
    const { createTeam, updateTeam, teams, getTeams } = useContext(TeamContext)
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

    const editMode = props.match.params.hasOwnProperty("teamId")

    const handleControlledInputChange = (e) => {
        const newTeamState = Object.assign({}, currentTeam)
        newTeamState[e.target.name] = e.target.value
        setCurrentTeam(newTeamState)
    }

    const getTeamInEditMode = () => {
        if (editMode) {
            const teamId = parseInt(props.match.params.teamId)
            const selectedTeam = teams.find(t => t.id === teamId) || {}
            setCurrentTeam(selectedTeam)
        }
    }

    useEffect(() => {
        getTeams()
        getLeagues()
    }, [])

    useEffect(() => {
        getTeamInEditMode()
    }, [teams])

    const registerNewTeam = () => {
        if (editMode) {
            updateTeam({
                id: currentTeam.id,
                teamName: currentTeam.teamName,
                teamType: currentTeam.teamType,
                teamRank: parseInt(currentTeam.teamRank),
                teamValue: parseInt(currentTeam.teamValue),
                teamRerolls: parseInt(currentTeam.teamRerolls),
                fanFactor: parseInt(currentTeam.fanFactor),
                leagueId: parseInt(currentTeam.leagueId),
                coach: parseInt(localStorage.getItem("token"))
            })
                .then(() => props.history.push("/teams"))
        } else {
            createTeam({
                teamName: currentTeam.teamName,
                teamType: currentTeam.teamType,
                teamRank: parseInt(currentTeam.teamRank),
                teamValue: parseInt(currentTeam.teamValue),
                teamRerolls: parseInt(currentTeam.teamRerolls),
                fanFactor: parseInt(currentTeam.fanFactor),
                leagueId: parseInt(currentTeam.leagueId),
                coach: parseInt(localStorage.getItem("token"))
            })
                .then(() => props.history.push("/teams"))
        }
    }

    return (
        <form className="col-6 offset-3">
            <h2 className="teamForm__teamTitle">{editMode ? "Update Team" : "Register New Team"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="teamName">Team Name: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        placeholder="Team Name Here"
                        value={currentTeam.teamName}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="teamType">Team Type: </label>
                    <input type="text" name="teamType" required autoFocus className="form-control"
                        placeholder="Orcs, Elves, or Halflings?"
                        value={currentTeam.teamType}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="teamRank">Team Rank: </label>
                    <input type="text" name="teamRank" required autoFocus className="form-control"
                        placeholder="How much are you winning?"
                        value={currentTeam.teamRank}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="teamValue">Team Value: </label>
                    <input type="text" name="teamValue" required autoFocus className="form-control"
                        placeholder="What are you worth?"
                        value={currentTeam.teamValue}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="teamRerolls">Team Rerolls: </label>
                    <input type="text" name="teamRerolls" required autoFocus className="form-control"
                        placeholder="How often can you turn back time?"
                        value={currentTeam.teamRerolls}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="fanFactor">Fan Factor: </label>
                    <input type="text" name="fanFactor" required autoFocus className="form-control"
                        placeholder="Do fans even like you?"
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
                    registerNewTeam()
                }}
                className="btn btn-primary">
                {editMode ? "Save Changes" : "Register New Team"}
            </button>
        </form>
    )
}