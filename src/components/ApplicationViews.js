import React from "react"
import { Route } from "react-router-dom"
// import { ProfileProvider } from "./Auth/AuthProvider"
// import { Profile } from "./Auth/Profile"

import { EventList } from "./Events/EventList"
import { EventProvider } from "./Events/EventProvider"

import { LeagueList } from "./Leagues/LeagueList"
import { LeagueProvider } from "./Leagues/LeagueProvider"

import { PlayerList } from "./Players/PlayerList"
import { PlayerProvider } from "./Players/PlayerProvider"
import { TeamForm } from "./Teams/TeamForm"

import { TeamList } from "./Teams/TeamList"
import { TeamProvider } from "./Teams/TeamProvider"

export const ApplicationViews = (props) => {
    return (
        <>
            <TeamProvider>
            <Route path="/" render={props => <TeamList {...props} /> } />
            </TeamProvider>

            <LeagueProvider>
            <TeamProvider>
                <Route path="/teams" render={props => <TeamList {...props} /> } />
                <Route exact path="/teams/new" render={props => <TeamForm {...props} /> } />
            </TeamProvider>
            </LeagueProvider>


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

            <LeagueProvider>
                <Route path="/leagues">
                    <LeagueList />
                </Route>
            </LeagueProvider>
        </>
    )
}