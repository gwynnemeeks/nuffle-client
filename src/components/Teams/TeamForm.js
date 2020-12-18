import React, { useContext, useState, useEffect } from "react"
import { TeamContext } from "./TeamProvider.js"
// import { LeagueContext } from "../Leagues/LeagueProvider/js"

export const TeamForm = props => {
    const { createTeam } = useContext(TeamContext)
    // const { getLeagues, leagues } = useContext(LeagueContext)

    const [currentTeam, setCurrentTeam] = useState({
        teamName: "",
        teamType: "",
        teamRank: 0,
        teamValue: 0,
        teamRerolls: 0,
        fanFactor: 0,
        // leagueId: 1 This will be like gametype
    })

    // useEffect(() => {
    //     getLeagues()
    // }, [])

    const handleControlledInputChange = (e) => {
        const newTeamState = Object.assign({}, currentTeam)
        newTeamState[e.target.name] = e.target.value
        setCurrentTeam(newTeamState)
    }

    return (
        <form className="teamForm">
        <h2 className="teamForm__title">Register New team</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="teamName">Team Name: </label>
                <input type="text" name="teamName" required autoFocus className="form-control"
                    value={currentTeam.teamName}
                    onChange={handleControlledInputChange}
                />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="teamType">Team Type: </label>
                <input type="text" name="teamType" required autoFocus className="form-control"
                    value={currentTeam.teamType}
                    onChange={handleControlledInputChange}
                />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="teamRank">Team Rank: </label>
                <input type="text" name="teamRank" required autoFocus className="form-control"
                    value={currentTeam.teamRank}
                    onChange={handleControlledInputChange}
                />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="teamValue">Team Value: </label>
                <input type="text" name="teamValue" required autoFocus className="form-control"
                    value={currentTeam.teamValue}
                    onChange={handleControlledInputChange}
                />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="teamRerolls">Team Rerolls: </label>
                <input type="text" name="teamRerolls" required autoFocus className="form-control"
                    value={currentTeam.teamRerolls}
                    onChange={handleControlledInputChange}
                />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="teamRank">Team Rank: </label>
                <input type="text" name="teamRank" required autoFocus className="form-control"
                    value={currentTeam.teamRank}
                    onChange={handleControlledInputChange}
                />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="fanFactor">Fan Factor: </label>
                <input type="text" name="fanFactor" required autoFocus className="form-control"
                    value={currentTeam.fanFactor}
                    onChange={handleControlledInputChange}
                />
            </div>
        </fieldset>
        </form>
    )
}