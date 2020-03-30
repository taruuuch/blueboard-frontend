import React from 'react';
import { Trips } from './containers/Trips/Trips';
import { Auth } from './containers/Auth/Auth';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ProtectedRoute } from './components/ui/PrivateRoute';
import { Profile } from './containers/Profile/Profile';

export const useRoutes = (isAuthenticated: boolean): JSX.Element => {
    if (isAuthenticated) {
        return (
            <Switch>
                <ProtectedRoute path="/trips" component={Trips} isAuthenticated={isAuthenticated} />
                <ProtectedRoute path="/profile" component={Profile} isAuthenticated={isAuthenticated} />
                <Redirect to="/trips" />
            </Switch>
        );
    }

    return (
        <Switch>
            <Route exact path="/" component={Auth} />
            <Redirect to="/" />
        </Switch>
    );
};
