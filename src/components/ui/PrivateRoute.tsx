import React from 'react';
import { Route, Redirect, RouteProps, RouteComponentProps } from 'react-router-dom';

interface ProtectedRouteProps extends RouteProps {
    isAuthenticated: boolean;
    component: any;
}

export const ProtectedRoute = (props: ProtectedRouteProps): JSX.Element => {
    const { component: Component, isAuthenticated, ...rest } = props;

    return (
        <Route
            {...rest}
            render={(routeProps: RouteComponentProps): JSX.Element =>
                isAuthenticated ? (
                    <Component {...routeProps} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: { from: routeProps.location }
                        }}
                    />
                )
            }
        />
    );
};
