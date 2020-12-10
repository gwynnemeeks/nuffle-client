/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from "react"
// import { HumanDate } from "../utils/HumanDate.js"
import { ProfileContext } from "./AuthProvider.js"
// import "./Profile.scss"


export const Profile = () => {
    const { profile, getProfile } = useContext(ProfileContext)

    useEffect(() => {
        getProfile()
    }, [])

    return (
        <article className="profile">
            <header>
                <h1>Your Profile</h1>
            </header>
            <section className="profile__info">
                <header className="profile__header">
                    <h3>Your Info</h3>
                </header>
                <div className="profile__name">
                    Welcome: {profile.coach && profile.coach.user.first_name} {profile.coach && profile.coach.user.last_name}
                </div>
                <div className="profile__username">Username: {profile.coach && profile.coach.user.username}</div>
            </section>
            {/* <section className="profile__registrations">
                <header className="registrations__header">
                    <h3>Your Events</h3>
                </header>
                <div className="registrations">
                    {
                        profile.events.map(event => {
                            return <div key={event.id} className="registration">
                                <div className="registration__game">{event.game.title}</div>
                                <div>{event.description}</div>
                                <div>
                                    <HumanDate date={event.date} /> @ {event.time}
                                </div>
                                <button className="btn btn-3">Leave</button>
                            </div>
                        })
                    }
                </div>
            </section> */}
        </article>
    )
}