import {
    userState,
    IUserState,
    UserTypes,
    USER_REQUEST,
    USER_SUCCESS,
    USER_FAIL,
    CLEAR_ERRORS
} from './types';

export const userReducer = (state = userState, action: UserTypes): IUserState => {
    switch (action.type) {
        case USER_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                currentProfile: action.payload.profile
            };
        case USER_FAIL:
            return {
                ...state,
                isLoading: false,
                errors: action.payload.errors
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                errors: []
            };
        default:
            return state;
    }
};
