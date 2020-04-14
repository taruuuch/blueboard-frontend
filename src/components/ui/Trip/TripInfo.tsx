import React from 'react';
import { Grid } from 'semantic-ui-react';
import './trip.scss';

export const TripInfo = (params): JSX.Element => {
    const { trip } = params;

    return (
        <Grid.Row>
            <p>{trip.createdBy}</p>
            <p>{trip.createdBy}</p>
            <p>{trip.createdBy}</p>
            <p>{trip.createdBy}</p>
        </Grid.Row>
    );
};
