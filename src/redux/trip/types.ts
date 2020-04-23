import { ITrip } from "../../types/TripTypes";

export const TRIP_REQUEST = 'TRIP_REQUEST';
export const TRIP_SUCCESS = 'TRIP_SUCCESS';
export const TRIPS_SUCCESS = 'TRIPS_SUCCESS';
export const TRIP_FAIL = 'TRIP_FAIL';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export interface ITripState {
    isLoading: boolean;
    currentTrip: ITrip;
    trips: ITrip[];
    errors: Array<object>;
}

export const tripState: ITripState = {
    isLoading: false,
    currentTrip: {} as ITrip,
    trips: {} as ITrip[],
    errors: []
};

interface TripRequestAction {
    type: typeof TRIP_REQUEST;
}

interface TripSuccessAction {
    type: typeof TRIP_SUCCESS;
    payload: ITripState;
}

interface TripsSuccessAction {
    type: typeof TRIPS_SUCCESS;
    payload: ITripState;
}

interface TripFailAction {
    type: typeof TRIP_FAIL;
    payload: ITripState;
}

interface ClearErrorsAction {
    type: typeof CLEAR_ERRORS;
}

export type TripTypes = TripRequestAction | TripSuccessAction | TripsSuccessAction | TripFailAction | ClearErrorsAction;
