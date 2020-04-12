import React from 'react';
import { Card } from 'semantic-ui-react';
import { TripItem } from './TripItem';
import './trips.scss';

export const TripsList = (params): JSX.Element => {
    const { trips } = params;

    return (
        <>
            {trips
                ? <Card.Group className='trips'>
                    {trips.map((trip: any, index: number) => <TripItem trip={trip} index={index} />)}
                </Card.Group>
                : 'Trips not found!'
            }
        </>
    );
};
