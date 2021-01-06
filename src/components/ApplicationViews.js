import React from "react"
import { Route } from "react-router-dom"
// import { ProfileProvider } from "./Auth/AuthProvider"
// import { Profile } from "./Auth/Profile"

import { EventList } from "./Events/EventList"
import { EventProvider } from "./Events/EventProvider"
import { EventDetails } from "./Events/EventDetail"

import { LeagueList } from "./Leagues/LeagueList"
import { LeagueProvider } from "./Leagues/LeagueProvider"
import { LeagueDetails } from "./Leagues/LeagueDetail"

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
                        <Route exact path="/teams/:teamId(\d+)" render={
                            props => <TeamDetails {...props} />
                        } />
                        <Route exact path="/teams/edit/:teamId(\d+)" render={
                    props => <TeamForm {...props} />
                        } />
                    </PlayerProvider>
                </LeagueProvider>
            </TeamProvider>

            <TeamProvider>
                <PlayerProvider>
                    <Route path="/players" render={props => <PlayerList {...props} />} />
                    <Route exact path="/players/new" render={props => <PlayerForm {...props} />} />
                    <Route exact path="/teams/players/:playerId(\d+)" render={
                            props => <PlayerDetails {...props} />
                        } />
                </PlayerProvider>
            </TeamProvider>

            <EventProvider>
                <Route path="/events" render={props => <EventList {...props} />} />
                <Route exact path="/events/new" render={props => <EventForm {...props} />} />
                <Route exact path="/events/:eventId(\d+)" render={
                            props => <EventDetails {...props} />
                        } />
            </EventProvider>


            <LeagueProvider>
                <Route exact path="/leagues" render={props => <LeagueList {...props} />} />
                <Route exact path="/leagues/new" render={(props) => {
                    return <LeagueForm {...props} />
                }} />
                <Route exact path="/leagues/:leagueId(\d+)" render={
                        props => <LeagueDetails {...props} />
                        } />
                <Route exact path="/leagues/edit/:leagueId(\d+)" render={
                    props => <LeagueForm {...props} />
                        } />
            </LeagueProvider>
        </>
    )
}