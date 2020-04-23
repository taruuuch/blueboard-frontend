import React from 'react';
import { Card } from 'semantic-ui-react';
import { TripItem } from './TripItem';
import './trips.scss';
import { ITrip } from '../../../types/TripTypes';

interface ITripList {
    trips: ITrip[];
};

export const TripsList = (params: ITripList): JSX.Element => {
    const { trips } = params;

    return (
        <>
            {trips.length > 0
                ? <Card.Group className='trips'>
                    {trips.map((trip: ITrip) => <TripItem trip={trip} />)}
                </Card.Group>
                : 'Trips not found!'
            }
        </>
    );
};
