import React from 'react';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { createTripAction } from '../redux/trip/actions';
import { ITripState, ITrip } from '../types/TripTypes';
import { CreateTripPage } from '../components/pages/CreateTripPage';

const typedUseSelector: TypedUseSelectorHook<ITripState> = useSelector;

export const CreateTrip = (): JSX.Element => {
    const dispatch = useDispatch();
    const isLoading = typedUseSelector(state => state.trip.isLoading);

    const handleSubmitSaveTrip = (trip: ITrip) => {
        dispatch(createTripAction(trip));
    }

    return <CreateTripPage handleSubmitSaveTrip={handleSubmitSaveTrip} isLoading={isLoading} />;
};
