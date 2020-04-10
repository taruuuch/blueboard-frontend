import React from 'react';
import { useRoutes } from '../routes';
import { Container } from 'semantic-ui-react';
import { useSelector, TypedUseSelectorHook } from 'react-redux';

interface IAppState {
    auth: {
        isAuthenticated: boolean;
    }
}

const typedUseSelector: TypedUseSelectorHook<IAppState> = useSelector;

export const App = (): JSX.Element => {
    const isAuthenticated = typedUseSelector(state => state.auth.isAuthenticated);
    const routes = useRoutes(isAuthenticated);

    return <Container fluid>{routes}</Container>;
};
