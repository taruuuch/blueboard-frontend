import React from 'react';
import { useRoutes } from '../routes';
import { authAPI } from '../api/Auth';

export const App = (): JSX.Element => {
    const isAuthenticated = !authAPI.isAuth();
    const routes = useRoutes(isAuthenticated);

    return <>{routes}</>;
};
