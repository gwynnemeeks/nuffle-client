import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.scss"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Nuffle</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/teams">Teams</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/players">Players</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/events">Events</Link>
            </li>
        </ul>
    )
}