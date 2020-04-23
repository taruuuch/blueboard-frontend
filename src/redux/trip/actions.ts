/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
    TripTypes,
    TRIP_REQUEST,
    TRIP_SUCCESS,
    TRIPS_SUCCESS,
    TRIP_FAIL,
    CLEAR_ERRORS
} from './types';
import { ITrip } from './../../types/TripTypes';
import { tripAPI } from '../../api/Trip';
import { history } from './../../helpers/history';

const tripRequestAction = (): TripTypes => ({
    type: TRIP_REQUEST
});

export const getTripAction = (id: number) => (dispatch: any) => {
    dispatch(tripRequestAction());

    tripAPI
        .get(id)
        .then(({ data: trip }: any) => {
            dispatch({
                type: TRIP_SUCCESS,
                payload: {
                    currentTrip: trip
                }
            });
        })
        .catch((err: any) => {
            dispatch({
                type: TRIP_FAIL,
                payload: {
                    errors: err
                }
            });
        });
};

export const getAllTripsAction = () => (dispatch: any) => {
    dispatch(tripRequestAction());

    tripAPI
        .getAll()
        .then(({ data: trips }: any) => {
            dispatch({
                type: TRIPS_SUCCESS,
                payload: {
                    trips
                }
            });
        })
        .catch((err: any) => {
            dispatch({
                type: TRIP_FAIL,
                payload: {
                    errors: err
                }
            });
        });
};

export const createTripAction = (trip: ITrip) => (dispatch: any) => {
    dispatch(tripRequestAction());

    tripAPI
        .create(trip)
        .then(({ data: trip }: any) => {
            dispatch({
                type: TRIP_SUCCESS,
                payload: {
                    trip
                }
            });
            history.push('/trips');
        })
        .catch((err: any) => {
            dispatch({
                type: TRIP_FAIL,
                payload: {
                    errors: err
                }
            });
        });
};

export const updateTripAction = (trip: ITrip) => (dispatch: any) => {
    dispatch(tripRequestAction());

    tripAPI
        .update(trip)
        .then(({ data: trip }: any) => {
            dispatch({
                type: TRIP_SUCCESS,
                payload: {
                    trip
                }
            });
            history.push('/trips');
        })
        .catch((err: any) => {
            dispatch({
                type: TRIP_FAIL,
                payload: {
                    errors: err
                }
            });
        });
};

export const clearErrorsAction = (): TripTypes => ({
    type: CLEAR_ERRORS
});
