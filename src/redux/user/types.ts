import { UserProfileTypes } from "../../api/User";

export const USER_REQUEST = 'USER_REQUEST';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAIL = 'USER_FAIL';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export interface User {
    currentProfile: UserProfileTypes;
    profile: UserProfileTypes;
    isLoading: boolean;
    errors: object;
}

const profileObj: UserProfileTypes = {
    status: 0,
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    phone: ''
};

export const userState: User = {
    currentProfile: profileObj,
    profile: profileObj,
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
