/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
    Authentication,
    AuthTypes,
    AuthCredentials,
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_FAIL,
    CLEAR_ERRORS
} from './types';
import { authAPI } from '../../api/Auth';

const authRequestAction = (): AuthTypes => ({
    type: AUTH_REQUEST
});

const authSuccessAction = (): AuthTypes => ({
    type: AUTH_SUCCESS
});

const authFailAction = (auth: Authentication): AuthTypes => ({
    type: AUTH_FAIL,
    payload: auth
});

export const clearErrorsAction = (): AuthTypes => ({
    type: CLEAR_ERRORS
});

export const signInAction = (email: string) => (dispatch: any) => {
    dispatch(authRequestAction());

    authAPI
        .signIn({ email })
        .then(() => {
            dispatch(authSuccessAction());
        })
        .catch((err) => {
            dispatch(authFailAction(err));
        });
};

export const signUpAction = (email: string) => (dispatch: any) => {
    dispatch(authRequestAction());

    authAPI
        .signUp({ email })
        .then(() => {
            dispatch(authSuccessAction());
        })
        .catch((err) => {
            dispatch(authFailAction(err));
        });
};

export const verifyAccessAction = (creadentials: AuthCredentials) => (dispatch: any) => {
    dispatch(authRequestAction());

    authAPI
        .verifyAccess(creadentials)
        .then(() => {
            dispatch(authSuccessAction());
        })
        .catch((err) => {
            dispatch(authFailAction(err));
        });
};
