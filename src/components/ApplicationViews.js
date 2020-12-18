import React from "react"
import { Route } from "react-router-dom"
// import { ProfileProvider } from "./Auth/AuthProvider"
// import { Profile } from "./Auth/Profile"

import { EventList } from "./Events/EventList"
import { EventProvider } from "./Events/EventProvider"

import { PlayerList } from "./Players/PlayerList"
import { PlayerProvider } from "./Players/PlayerProvider"

import { TeamList } from "./Teams/TeamList"
import { TeamProvider } from "./Teams/TeamProvider"

export const ApplicationViews = (props) => {
    return (
        <>
            <TeamProvider>
                <Route exact path="/">
                    <TeamList />
                </Route>
            </TeamProvider>

            <TeamProvider>
                <Route path="/teams">
                    <TeamList />
                </Route>
            </TeamProvider>

            <PlayerProvider>
                <Route path="/players">
                    <PlayerList />
                </Route>
            </PlayerProvider>

            <EventProvider>
                <Route path="/events">
                    <EventList />
                </Route>
            </EventProvider>
        </>
    )
}