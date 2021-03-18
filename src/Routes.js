import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from './components/auth/PrivateRoute'
import React from 'react'
import Home from './components/home/home'
import Login from './components/auth/login'
import Signup from './components/auth/signup'
import Dashboard from './components/dashboard/dashboard'
function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
