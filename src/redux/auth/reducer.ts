import {
    IAuthenticationState,
    AuthTypes,
    authState,
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_FAIL,
    CLEAR_ERRORS
} from './types';

export const authReducer = (state = authState, action: AuthTypes): IAuthenticationState => {
    switch (action.type) {
        case AUTH_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case AUTH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuthentication: true
            };
        case AUTH_FAIL:
            return {
                ...state,
                isLoading: false,
                isAuthentication: false,
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
