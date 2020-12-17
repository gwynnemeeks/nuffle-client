import React from "react"
import { Route } from "react-router-dom"
// import { ProfileProvider } from "./Auth/AuthProvider"
// import { Profile } from "./Auth/Profile"

import { TeamProvider } from "./Teams/TeamProvider"
import { PlayerProvider } from "./Players/PlayerProvider"
import { EventProvider } from "./Events/EventProvider"

import { TeamList } from "./Teams/TeamList"
import { PlayerList } from "./Players/PlayerList"
import { EventList } from "./Events/EventList"

export const ApplicationViews = (props) => {
    return (
        <>
            <TeamProvider>
                <Route exact path="/">
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