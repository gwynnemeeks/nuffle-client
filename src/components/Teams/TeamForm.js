/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from "react"
import { TeamContext } from "./TeamProvider.js"
import { LeagueContext } from "../Leagues/LeagueProvider.js"

export const TeamForm = props => {
    const { createTeam, updateTeam, getTeams, teams } = useContext(TeamContext)
    const { getLeagues, leagues } = useContext(LeagueContext)

    const [currentTeam, setCurrentTeam] = useState({league: {}})

    const editMode = props.match.params.hasOwnProperty("teamId")

    const handleControlledInputChange = (e) => {
        const newTeamState = Object.assign({}, currentTeam)
        newTeamState[e.target.name] = e.target.value
        setCurrentTeam(newTeamState)
    }

    const getTeamInEditMode = () => {
        if (editMode) { 
            const teamId = parseInt(props.match.params.teamId)
            const singleTeam = teams.find(t => t.id === teamId) || {}
            setCurrentTeam(singleTeam)
        }
    }

    console.log(currentTeam)

    useEffect(() => {
        getTeams()
        getLeagues()
    }, [])

    useEffect(() => {
        getTeamInEditMode()
    }, [teams])

    // useEffect(() => {
    //     if (editMode) {
    //         setCurrentTeam(teams)
    //     }
    // }, [])

    const registerNewTeam = () => {
        if (editMode) {
            // debugger
            updateTeam({
                id: currentTeam.id,
                teamName: currentTeam.team_name,
                teamType: currentTeam.team_type,
                teamRank: parseInt(currentTeam.team_rank),
                teamValue: parseInt(currentTeam.team_value),
                teamRerolls: parseInt(currentTeam.team_rerolls),
                fanFactor: parseInt(currentTeam.fan_factor),
                leagueId: parseInt(currentTeam.league.id),
                coach: parseInt(localStorage.getItem("token"))
            })
                .then(() => props.history.push(`/teams/${currentTeam.id}`))
        } else {
            createTeam(currentTeam)
                .then(() => props.history.push("/teams"))
        }
    }

    return (
        <form className="col-6 offset-3">
            <h2 className="teamForm__teamTitle">{editMode ? "Update Team" : "Register New Team"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="teamName">Team Name: </label>
                    <input type="text" name="team_name" required autoFocus className="form-control"
                        placeholder="Team Name Here"
                        defaultValue={currentTeam.team_name}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="teamType">Team Type: </label>
                    <input type="text" name="team_type" required autoFocus className="form-control"
                        placeholder="Orcs, Elves, or Halflings?"
                        defaultValue={currentTeam.team_type}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="teamRank">Team Rank: </label>
                    <input type="text" name="team_rank" required autoFocus className="form-control"
                        placeholder="How much are you winning?"
                        defaultValue={currentTeam.team_rank}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="teamValue">Team Value: </label>
                    <input type="text" name="team_value" required autoFocus className="form-control"
                        placeholder="What are you worth?"
                        defaultValue={currentTeam.team_value}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="teamRerolls">Team Rerolls: </label>
                    <input type="text" name="team_rerolls" required autoFocus className="form-control"
                        placeholder="How often can you turn back time?"
                        defaultValue={currentTeam.team_rerolls}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="fanFactor">Fan Factor: </label>
                    <input type="text" name="fan_factor" required autoFocus className="form-control"
                        placeholder="Do fans even like you?"
                        defaultValue={currentTeam.fan_factor}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="leagueId">League: </label>
                    <select name="leagueId" className="form-control"
                        defaultValue={currentTeam.league.id}
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