import React from 'react';
import { AuthForm } from '../components/ui/AuthForm/AuthForm';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { signInAction, verifyAccessAction } from '../redux/auth/actions';
import { AuthState, Creadentials } from '../types/AuthTypes';

const typedUseSelector: TypedUseSelectorHook<AuthState> = useSelector;

export const Auth = (): JSX.Element => {
    const dispatch = useDispatch();
    const isLoading = typedUseSelector((state) => state.auth.isLoading);

    const handleAuth = (email: string): any => dispatch(signInAction(email));
    const handleVerify = (creadentials: Creadentials): any => dispatch(verifyAccessAction(creadentials));

    return <AuthForm isLoading={isLoading} handleAuth={handleAuth} handleVerify={handleVerify} />;
};
