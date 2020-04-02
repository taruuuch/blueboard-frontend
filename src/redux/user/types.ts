export const USER_REQUEST = 'USER_REQUEST';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAIL = 'USER_FAIL';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export interface User {
    currentProfile: object;
    profile: object;
    isLoading: boolean;
    errors: object;
}

export const userState: User = {
    currentProfile: {},
    profile: {},
    isLoading: false,
    errors: {}
};

interface UserRequestAction {
    type: typeof USER_REQUEST;
}

interface UserSuccessAction {
    type: typeof USER_SUCCESS;
    payload: User;
}

interface UserFailAction {
    type: typeof USER_FAIL;
    payload: User;
}

interface ClearErrorsAction {
    type: typeof CLEAR_ERRORS;
}

export type UserTypes = UserRequestAction | UserSuccessAction | UserFailAction | ClearErrorsAction;
