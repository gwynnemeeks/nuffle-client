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
import { PlayerDetails } from "./Players/PlayerDetail"

import { TeamList } from "./Teams/TeamList"
import { TeamProvider } from "./Teams/TeamProvider"
import { TeamDetails } from "./Teams/TeamDetail"

import { EventForm } from "./Events/EventForm"
import { LeagueForm } from "./Leagues/LeagueForm"
import { PlayerForm } from "./Players/PlayerForm"
import { TeamForm } from "./Teams/TeamForm"

export const ApplicationViews = (props) => {
    return (
        <>
            <TeamProvider>
                <LeagueProvider>
                    <PlayerProvider>

                        <Route exact path="/teams" render={props => <TeamList {...props} />} />
                        <Route exact path="/teams/new" render={props => <TeamForm {...props} />} />
                        <Route path="/teams/:teamId(\d+)" render={
                            props => <TeamDetails {...props} />
                        } />
                    </PlayerProvider>
                </LeagueProvider>
            </TeamProvider>

            <TeamProvider>
                <PlayerProvider>
                    <Route path="/players" render={props => <PlayerList {...props} />} />
                    <Route exact path="/players/new" render={props => <PlayerForm {...props} />} />
                    <Route path="/players/:playerId(\d+)" render={
                            props => <PlayerDetails {...props} />
                        } />
                </PlayerProvider>
            </TeamProvider>

            <EventProvider>
                <Route path="/events" render={props => <EventList {...props} />} />
                <Route exact path="/events/new" render={props => <EventForm {...props} />} />
            </EventProvider>


            <LeagueProvider>
                <Route path="/leagues" render={props => <LeagueList {...props} />} />
                <Route exact path="/leagues/new" render={props => <LeagueForm {...props} />} />
            </LeagueProvider>
        </>
    )
}