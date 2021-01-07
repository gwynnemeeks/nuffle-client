/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from "react"
import { PlayerContext } from "./PlayerProvider.js"
import { TeamContext } from "../Teams/TeamProvider.js"

export const PlayerForm = props => {
    const { createPlayer, updatePlayer, getPlayers, players } = useContext(PlayerContext)
    const { getTeams, teams } = useContext(TeamContext)

    const [currentPlayer, setCurrentPlayer] = useState({team: {}})

    const editMode = props.match.params.hasOwnProperty("playerId")

    const handleControlledInputChange = (e) => {
        const newPlayerState = Object.assign({}, currentPlayer)
        newPlayerState[e.target.name] = e.target.value
        setCurrentPlayer(newPlayerState)
    }

    const getPlayerInEditMode = () => {
        if (editMode) {
            const playerId = parseInt(props.match.params.playerId)
            const selectedPlayer = players.find(p => p.id === playerId) || {}
            setCurrentPlayer(selectedPlayer)
        }
    }

    useEffect(() => {
        getTeams()
        getPlayers()
    }, [])

    useEffect(() => {
        getPlayerInEditMode()
    }, [currentPlayer])

    const createNewPlayer = () => {
        if (editMode) {
            updatePlayer({
                id: currentPlayer.id,
                name: currentPlayer.name,
                position: currentPlayer.position,
                movement: parseInt(currentPlayer.movement),
                strength: parseInt(currentPlayer.strength),
                agility: parseInt(currentPlayer.agility),
                armorValue: parseInt(currentPlayer.armor_value),
                skills: currentPlayer.skills,
                cost: parseInt(currentPlayer.cost),
                history: currentPlayer.history,
                teamId: parseInt(currentPlayer.team.id)

            })
                .then(() => props.history.push(`/teams/players/${currentPlayer.id}`))

        } else {
            createPlayer(currentPlayer)
                .then(() => props.history.push("/players"))
        }
    }

    return (
        <form className="col-6 offset-3">
            <h2 className="playerForm__title">{editMode ? "Update Player" : "Register New Player"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="playerName">Player Name: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        defaultValue={currentPlayer.name}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="position">Player Position: </label>
                    <input type="text" name="position" required autoFocus className="form-control"
                        defaultValue={currentPlayer.position}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="movement">Player Movement: </label>
                    <input type="text" name="movement" required autoFocus className="form-control"
                        defaultValue={currentPlayer.movement}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="strength">Player Strength: </label>
                    <input type="text" name="strength" required autoFocus className="form-control"
                        defaultValue={currentPlayer.strength}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="agility">Player Agility: </label>
                    <input type="text" name="agility" required autoFocus className="form-control"
                        defaultValue={currentPlayer.agility}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="armorValue">Armor Value: </label>
                    <input type="text" name="armorValue" required autoFocus className="form-control"
                        defaultValue={currentPlayer.armor_value}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="skills">Player Skills: </label>
                    <input type="text" name="skills" required autoFocus className="form-control"
                        defaultValue={currentPlayer.skills}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="cost">Player Cost: </label>
                    <input type="text" name="cost" required autoFocus className="form-control"
                        defaultValue={currentPlayer.cost}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="history">Player History: </label>
                    <input type="text" name="history" required autoFocus className="form-control"
                        defaultValue={currentPlayer.history}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="teamId">Team: </label>
                    <select name="teamId" className="form-control"
                        defaultValue={currentPlayer.team.id}
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
                    evt.preventDefault()
                    createNewPlayer()

                }}
                className="btn btn-primary">
                {editMode ? "Save Player" : "Register New Player"}</button>
        </form>
    )
}
