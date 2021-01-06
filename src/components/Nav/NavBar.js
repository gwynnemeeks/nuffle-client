import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.scss"

export const NavBar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Nuffle</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/teams">Teams</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/events">Events</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/leagues">Leagues</Link>
            </li>
            <div className="navbar__item fakelink"
                onClick={() => {
                    localStorage.removeItem("token")
                    props.history.push({ pathname: "/"})
                }}>Logout</div>
        </nav>
    )
}