import React from 'react';
import { Switch, Route, Redirect, RouteComponentProps } from 'react-router-dom';
import { IRenderRoutes } from '../../types/RouteTypes';

export const renderRoutes = (props: IRenderRoutes) => {
    const { routes, isAuthenticated } = props;

    return routes ? (
        <Switch>
            {routes.map(route => (
                <Route
                    path={route.path}
                    exact={route.exact}
                    render={(routeProps: RouteComponentProps) => {
                        if (!route.restricted || isAuthenticated) {
                            const { layout: Layout, component: Component } = route;

                            return (
                                <Layout {...routeProps}>
                                    <Component />
                                </Layout>
                            );
                        }

                        return <Redirect to={{
                            pathname: '/',
                            state: { from: routeProps.location }
                        }} />;
                }}
                />
            ))}
        </Switch>
    ) : null;
};
