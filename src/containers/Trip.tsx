import React, { useEffect } from 'react';
import { TripPage } from '../components/pages/TripPage';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { getTripAction } from '../redux/trip/actions';
import { ITripState } from '../types/TripTypes';

const typedUseSelector: TypedUseSelectorHook<ITripState> = useSelector;

export const Trip = (): JSX.Element => {
    const { id: tripId } = useParams();
    const dispatch = useDispatch();
    const isLoading = typedUseSelector(state => state.trip.isLoading);
    const trip = typedUseSelector(state => state.trip.currentTrip);

    useEffect(() => {
        dispatch(getTripAction(Number(tripId)));
    }, [dispatch, tripId]);

    return <TripPage trip={trip} isLoading={isLoading} />;
};
