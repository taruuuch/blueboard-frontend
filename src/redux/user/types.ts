import { UserProfileTypes } from './../../types/UserTypes';
export const USER_REQUEST = 'USER_REQUEST';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAIL = 'USER_FAIL';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export interface IUserState {
    currentProfile: UserProfileTypes;
    profile: UserProfileTypes;
    isLoading: boolean;
    errors: Array<object>;
}

export const userState: IUserState = {
    currentProfile: {} as UserProfileTypes,
    profile: {} as UserProfileTypes,
    isLoading: false,
    errors: []
};

interface UserRequestAction {
    type: typeof USER_REQUEST;
}

interface UserSuccessAction {
    type: typeof USER_SUCCESS;
    payload: IUserState;
}

interface UserFailAction {
    type: typeof USER_FAIL;
    payload: IUserState;
}

interface ClearErrorsAction {
    type: typeof CLEAR_ERRORS;
}

export type UserTypes = UserRequestAction | UserSuccessAction | UserFailAction | ClearErrorsAction;
