import {
    ITripState,
    TripTypes,
    tripState,
    TRIP_REQUEST,
    TRIP_SUCCESS,
    TRIP_FAIL,
    CLEAR_ERRORS
} from './types';

export const authReducer = (state = tripState, action: TripTypes): ITripState => {
    switch (action.type) {
        case TRIP_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case TRIP_SUCCESS:
            return {
                ...state,
                isLoading: false
            };
        case TRIP_FAIL:
            return {
                ...state,
                isLoading: false
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
