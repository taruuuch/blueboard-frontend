import React from 'react';
import { routes } from '../routes';
import { renderRoutes } from '../components/ui/renderRoutes'
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
    const Routes = renderRoutes({ routes, isAuthenticated });

    return <Container fluid>{Routes}</Container>;
};
