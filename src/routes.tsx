import React from 'react';
import { Trips } from './containers/Trips';
import { Auth } from './containers/Auth';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ProtectedRoute } from './components/ui/Routes/PrivateRoute';
import { RouteWrapper } from './components/ui/Routes/RouteWrapper';
import { Profile } from './containers/Profile';
import { BaseLayout } from './components/layouts/BaseLayout';
import { AuthLayout } from './components/layouts/AuthLayout';
import { Logout } from './containers/Logout';

export const useRoutes = (isAuthenticated: boolean): JSX.Element => {
    if (isAuthenticated) {
        return (
            <Switch>
                <ProtectedRoute path="/trips" component={Trips} isAuthenticated={isAuthenticated} layout={BaseLayout} />
                <ProtectedRoute path="/profile" component={Profile} isAuthenticated={isAuthenticated} layout={BaseLayout} />
                <Route path="/logout" component={Logout} />
                <Redirect to="/trips" />
            </Switch>
        );
    }

    return (
        <Switch>
            <RouteWrapper exact path="/" component={Auth} layout={AuthLayout} />
            <Redirect to="/" />
        </Switch>
    );
};
