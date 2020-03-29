export const AUTH = 'AUTH';
export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAIL = 'AUTH_FAIL';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export interface Authentication {
    isLoading: boolean;
    isAuthentication: boolean;
    errors: object;
}

export const authState: Authentication = {
    isLoading: false,
    isAuthentication: false,
    errors: {}
};

export interface AuthCredentials {
    email: string;
    password: string;
}

interface AuthAction {
    type: typeof AUTH;
    payload: Authentication;
}

interface AuthRequestAction {
    type: typeof AUTH_REQUEST;
}

interface AuthSuccessAction {
    type: typeof AUTH_SUCCESS;
}

interface AuthFailAction {
    type: typeof AUTH_FAIL;
    payload: Authentication;
}

interface ClearErrorsAction {
    type: typeof CLEAR_ERRORS;
}

export type AuthTypes = AuthAction | AuthRequestAction | AuthSuccessAction | AuthFailAction | ClearErrorsAction;
