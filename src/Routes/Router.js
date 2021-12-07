import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HealthyRecipes from "../Pages/HealthyRecipes/HealthyRecipes";
import Join from "../Pages/Join/Join";
import Blog from "../Pages/Blog/Blog";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Services from "../Pages/services/Services";



 const Router = () => {

    return (
    <BrowserRouter>
        <Switch>

            <Route exact path="/">
            <Home/>
            </Route>

            <Route exact path="/healthyrecipes">
            <HealthyRecipes/>
            </Route>

            <Route exact path="/blog">
                <Blog />
            </Route>


            <Route exact path="/join">
                <Join />
            </Route>

            <Route exact path="/register">
                <Register/>
            </Route>


            <Route exact path="/services">
                <Services/>
            </Route>

            <Route>
                <ErrorPage/>
            </Route>


        </Switch>
    </BrowserRouter>
    )
}

export default Router;