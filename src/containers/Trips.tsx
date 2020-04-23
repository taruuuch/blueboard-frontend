import React, { useEffect } from 'react';
import { TripsPage } from '../components/pages/TripsPage';
import { ITripState } from '../types/TripTypes';
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import { getAllTripsAction } from '../redux/trip/actions';

const typedUseSelector: TypedUseSelectorHook<ITripState> = useSelector;

export const Trips = (): JSX.Element => {
    const dispatch = useDispatch();
    const isLoading = typedUseSelector(state => state.trip.isLoading);
    const trips = typedUseSelector(state => state.trip.trips);

    useEffect(() => {
        dispatch(getAllTripsAction());
    }, [dispatch]);

    return <TripsPage trips={trips} isLoading={isLoading} />;
};
