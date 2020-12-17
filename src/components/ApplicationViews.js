import React from "react"
import { Route } from "react-router-dom"
import { ProfileProvider } from "./Auth/AuthProvider"
import { Profile } from "./Auth/Profile"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <ProfileProvider>
                <Route exact path="/profile">
                    <Profile />
                </Route>
            </ProfileProvider>
        </main>
        </>
}