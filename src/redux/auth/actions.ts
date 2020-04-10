/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
    IAuthenticationState,
    AuthTypes,
    AuthCredentials,
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_FAIL,
    CLEAR_ERRORS
} from './types';
import { authAPI } from '../../api/Auth';
import { history } from '../../helpers/history';

const authRequestAction = (): AuthTypes => ({
    type: AUTH_REQUEST
});

const authSuccessAction = (): AuthTypes => ({
    type: AUTH_SUCCESS
});

const authFailAction = (auth: IAuthenticationState): AuthTypes => ({
    type: AUTH_FAIL,
    payload: auth
});

export const clearErrorsAction = (): AuthTypes => ({
    type: CLEAR_ERRORS
});

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

export const signInAction = (email: string) => (dispatch: any) => {
    dispatch(authRequestAction());

    authAPI
        .signIn({ email })
        .then(() => {
            dispatch(authSuccessAction());
        })
        .catch((err) => {
            dispatch(authFailAction(err));
            dispatch(signUpAction(email));
        });
};

export const verifyAccessAction = (creadentials: AuthCredentials) => (dispatch: any) => {
    dispatch(authRequestAction());

    authAPI
        .verifyAccess(creadentials)
        .then(({ data }: any) => {
            dispatch(authSuccessAction());
            authAPI.setJWT(data);
            history.push('/trips');
        })
        .catch((err) => {
            dispatch(authFailAction(err));
        });
};
