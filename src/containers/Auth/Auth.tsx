import React from 'react';
import { AuthForm } from '../../components/ui/AuthForm/AuthForm';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { signInAction, verifyAccessAction } from '../../redux/auth/actions';
import { AuthState, Creadentials } from './AuthTypes';
import { Grid } from 'semantic-ui-react';

const typedUseSelector: TypedUseSelectorHook<AuthState> = useSelector;

export const Auth = (): JSX.Element => {
    const dispatch = useDispatch();
    const isLoading = typedUseSelector((state) => state.auth.isLoading);

    const handleAuth = (email: string): any => dispatch(signInAction(email));
    const handleVerify = (creadentials: Creadentials): any => dispatch(verifyAccessAction(creadentials));

    return (
        <Grid centered verticalAlign="middle" style={{ height: '100vh' }}>
            <Grid.Row>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <AuthForm isLoading={isLoading} handleAuth={handleAuth} handleVerify={handleVerify} />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};
