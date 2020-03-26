import React from 'react';
import { Route, Redirect, RouteProps, useLocation } from 'react-router-dom';

interface ProtectedRouteProps extends RouteProps {
    isAuthenticated: boolean;
    authenticationPath: string;
    redirectPathOnAuthentication: string;
    setRedirectPathOnAuthentication: (path: string) => void;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = (props) => {
    const currentLocation = useLocation();
    let redirectPath = props.redirectPathOnAuthentication;

    if (!props.isAuthenticated) {
        props.setRedirectPathOnAuthentication(currentLocation.pathname);
        redirectPath = props.authenticationPath;
    }

    if (redirectPath !== currentLocation.pathname) {
        const renderComponent = () => <Redirect to={{ pathname: redirectPath }} />;

        return <Route {...props} component={renderComponent} render={undefined} />;
    } else {
        return <Route {...props} />;
    }
};
