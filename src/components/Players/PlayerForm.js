/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from "react"
import { PlayerContext } from "./PlayerProvider.js"
import { TeamContext } from "../Teams/TeamProvider.js"

export const PlayerForm = props => {
    const { createPlayer } = useContext(PlayerContext)
    const { getTeams, teams } = useContext(TeamContext)

    const [currentPlayer, setCurrentPlayer] = useState({
        name: "",
        position: "",
        movement: 0,
        strength: 0,
        agility: 0,
        armorValue: 0,
        skills: "",
        cost: 0,
        history: "",
        teamId: 0
    })

    useEffect(() => {
        getTeams()
    }, [])

    const handleControlledInputChange = (e) => {
        const newPlayerState = Object.assign({}, currentPlayer)
        newPlayerState[e.target.name] = e.target.armorValue
        setCurrentPlayer(newPlayerState)
    }

    return (
        <form className="playerForm">
        <h2 className="playerForm__title">Register New Player</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="playerName">Player Name: </label>
                <input type="text" name="playerName" required autoFocus className="form-control"
                    value={currentPlayer.name}
                    onChange={handleControlledInputChange}
                />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="position">Player Position: </label>
                <input type="text" name="position" required autoFocus className="form-control"
                    value={currentPlayer.position}
                    onChange={handleControlledInputChange}
                />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="movement">Player Movement: </label>
                <input type="text" name="movement" required autoFocus className="form-control"
                    value={currentPlayer.movement}
                    onChange={handleControlledInputChange}
                />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="strength">Player Strength: </label>
                <input type="text" name="strength" required autoFocus className="form-control"
                    value={currentPlayer.strength}
                    onChange={handleControlledInputChange}
                />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="agility">Player Agility: </label>
                <input type="text" name="agility" required autoFocus className="form-control"
                    value={currentPlayer.agility}
                    onChange={handleControlledInputChange}
                />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="armorValue">Armor Value: </label>
                <input type="text" name="armorValue" required autoFocus className="form-control"
                    value={currentPlayer.armorValue}
                    onChange={handleControlledInputChange}
                />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="skills">Player Skills: </label>
                <input type="text" name="skills" required autoFocus className="form-control"
                    value={currentPlayer.skills}
                    onChange={handleControlledInputChange}
                />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="cost">Player Cost: </label>
                <input type="text" name="cost" required autoFocus className="form-control"
                    value={currentPlayer.cost}
                    onChange={handleControlledInputChange}
                />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="history">Player History: </label>
                <input type="text" name="history" required autoFocus className="form-control"
                    value={currentPlayer.history}
                    onChange={handleControlledInputChange}
                />
            </div>
        </fieldset>
        <fieldset>
                <div className="form-group">
                    <label htmlFor="teamId">Team: </label>
                    <select name="teamId" className="form-control"
                        value={currentPlayer.teamId}
                        onChange={handleControlledInputChange}>
                        <option value="0">Select a team</option>
                        {
                            teams.map(tea => (
                                <option key={tea.id} value={tea.id}> {tea.team_name} </option>
                            ))
                        }
                    </select>
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const player = {
                        name: currentPlayer.name,
                        position: currentPlayer.position,
                        movement: parseInt(currentPlayer.movement),
                        strength: parseInt(currentPlayer.strength),
                        agility: parseInt(currentPlayer.agility),
                        armorValue: parseInt(currentPlayer.armorValue),
                        skills: currentPlayer.skills,
                        cost: parseInt(currentPlayer.cost),
                        history: currentPlayer.history,
                        teamId: parseInt(currentPlayer.teamId)
                                    }

                    // Send POST request to your API
                    createPlayer(player)
                    props.history.push("/players")
                }}
                className="btn btn-primary">Create</button>
        </form>
    )
}
