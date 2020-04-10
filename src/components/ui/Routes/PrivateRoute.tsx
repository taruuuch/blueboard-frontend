import React from 'react';
import { Route, Redirect, RouteProps, RouteComponentProps } from 'react-router-dom';

interface ProtectedRouteProps extends RouteProps {
    isAuthenticated: boolean;
    component: any;
    layout: any;
}

export const ProtectedRoute = (props: ProtectedRouteProps): JSX.Element => {
    const { component: Component, layout: Layout, isAuthenticated, ...rest } = props;

    return (
        <Route
            {...rest}
            render={(routeProps: RouteComponentProps): JSX.Element =>
                isAuthenticated ? (
                    <Layout>
                        <Component {...routeProps} />
                    </Layout>
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
