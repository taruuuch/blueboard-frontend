import {
    userState,
    User,
    UserTypes,
    USER_REQUEST,
    USER_SUCCESS,
    USER_FAIL,
    CLEAR_ERRORS
} from './types';

export const userReducer = (state = userState, action: UserTypes): User => {
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
                currentProfile: action.payload
            };
        case USER_FAIL:
            return {
                ...state,
                isLoading: false,
                errors: action.payload
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                errors: {}
            };
        default:
            return state;
    }
};
