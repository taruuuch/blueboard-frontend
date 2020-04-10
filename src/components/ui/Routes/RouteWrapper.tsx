import React from 'react';
import { Route, RouteProps, RouteComponentProps } from 'react-router';

interface IRouteWrapperProps extends RouteProps {
    component: any;
    layout: any;
}

export const RouteWrapper = (props: IRouteWrapperProps): JSX.Element => {
    const { component: Component, layout: Layout, ...rest } = props;

    return (
        <Route
            {...rest}
            render={(routeProps: RouteComponentProps): JSX.Element =>
                <Layout {...routeProps}>
                    <Component {...routeProps} />
                </Layout>
            }
        />
    );
};
