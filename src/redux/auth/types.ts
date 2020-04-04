import { authAPI } from './../../api/Auth';
export const AUTH = 'AUTH';
export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAIL = 'AUTH_FAIL';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export interface IAuthenticationState {
    isLoading: boolean;
    isAuthentication: boolean;
    errors: Array<object>;
}

export const authState: IAuthenticationState = {
    isLoading: false,
    isAuthentication: !!authAPI.getJWT().accessToken,
    errors: []
};

export interface AuthCredentials {
    email: string;
    password: string;
}

interface AuthRequestAction {
    type: typeof AUTH_REQUEST;
}

interface AuthSuccessAction {
    type: typeof AUTH_SUCCESS;
}

interface AuthFailAction {
    type: typeof AUTH_FAIL;
    payload: IAuthenticationState;
}

interface ClearErrorsAction {
    type: typeof CLEAR_ERRORS;
}

export type AuthTypes = AuthRequestAction | AuthSuccessAction | AuthFailAction | ClearErrorsAction;
