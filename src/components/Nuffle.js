/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { Login } from "./Auth/Login"
import { NavBar } from "./Nav/NavBar"
import { Register } from "./Auth/Register"

import './Nuffle.scss';

export const Nuffle = () => (
    <>
    <Route render={() => {
            if (localStorage.getItem("token")) {
                return <>
                    <NavBar />
                    <ApplicationViews />             

                </>
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login" render={Login} />
        <Route path="/register" render={Register} />
    </>
);
