import {
    IAuthenticationState,
    AuthTypes,
    authState,
    AUTH_REQUEST,
    AUTH_SUCCESS,
    VERIFY_SUCCESS,
    AUTH_FAIL,
    LOGOUT,
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
                isLoading: false
            };
        case VERIFY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true
            };
        case AUTH_FAIL:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: false,
                errors: action.payload.errors
            };
        case LOGOUT:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: false,
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
