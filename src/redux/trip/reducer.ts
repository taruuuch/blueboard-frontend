import {
    ITripState,
    TripTypes,
    tripState,
    TRIP_REQUEST,
    TRIP_SUCCESS,
    TRIPS_SUCCESS,
    TRIP_FAIL,
    CLEAR_ERRORS
} from './types';

export const tripReducer = (state = tripState, action: TripTypes): ITripState => {
    switch (action.type) {
        case TRIP_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case TRIP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                currentTrip: action.payload.currentTrip
            };
        case TRIPS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                trips: action.payload.trips
            };
        case TRIP_FAIL:
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
