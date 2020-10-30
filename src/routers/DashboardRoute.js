import React from 'react'
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Navbar from "../components/Navbar"
import HomePage from "../pages/HomePage"
import PerfilePage from '../pages/perfilePage';
import WorkPage from '../pages/WorkPage'
import StoriesPage from '../pages/StoriesPage'


export default function DashboardRoute() {
    return (
        <>
            <Navbar />
            <Switch>
                {/* <Route path="/character/:heroId" component={ CharacterPage } /> */}
                <Route path="/stories" component={ StoriesPage } />
                <Route path="/mywork" component={ WorkPage } />
                <Route path="/perfile" component={ PerfilePage } />
                <Route path="/home" component={ HomePage } />
                <Route path="/404" component={ HomePage } />

                <Redirect to="/404" />
            </Switch>
        </>
    )
}
