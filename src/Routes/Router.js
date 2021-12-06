import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HealthyRecipes from "../Pages/HealthyRecipes/HealthyRecipes";
import Join from "../Pages/Join/Join";
import Blog from "../Pages/Blog/Blog";
import Register from "../Pages/Register/Register";
import Sabermais from "../Pages/Sabermais/Sabermais";

export const Router = () => {
    <BrowserRouter>
        <Switch>
            <Route exact path="/HealthyRecipe">
                <HealthyRecipes />

            </Route>

            <Route exact path="/Blog">
                <Blog />
            </Route>
            <Route exact path="/Join">
                <Join />
            </Route>
            <Route exact path="/Register">
                <Register />
            </Route>
            <Route exact path="/Sabermais">
                <Sabermais />

            </Route>

            <Route>
                <ErrorPage />
            </Route>


        </Switch>
    </BrowserRouter>
}

