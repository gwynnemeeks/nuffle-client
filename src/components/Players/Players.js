import React from "react"
import "./Players.scss"

export const Player = ({ player }) => (
    <div className="w-50 p-3">
    <div className="card text-center">
    <h5 className="card-title">{player.name}</h5>
    <div className="card body">
    <p className="card-text">{player.position}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">AG: {player.agility}</li>
    <li className="list-group-item">AV: {player.armor_value}</li>
    <li className="list-group-item">ST: {player.strength}</li>
    <li className="list-group-item">MV: {player.movement}</li>
  </ul>
  </div>
  </div>
    

)