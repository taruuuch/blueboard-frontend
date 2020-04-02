import React from 'react';
import { useRoutes } from '../routes';
import { authAPI } from '../api/Auth';
import { Container } from 'semantic-ui-react';

export const App = (): JSX.Element => {
    const isAuthenticated = !authAPI.isAuth();
    const routes = useRoutes(isAuthenticated);

    return <Container>{routes}</Container>;
};
