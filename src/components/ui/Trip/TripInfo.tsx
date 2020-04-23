import React from 'react';
import { Grid, Container } from 'semantic-ui-react';
import dayjs from 'dayjs';
import './trip.scss';

export const TripInfo = (params): JSX.Element => {
    const { trip } = params;

    return (
        <Grid.Row>
            <Container as='div'>{trip.description}</Container>
            <Container as='div'>{dayjs(trip.startDate).format('DD-MM-YYYY HH:mm')}</Container>
            <Container as='div'>{dayjs(trip.endDate).format('DD-MM-YYYY HH:mm')}</Container>
        </Grid.Row>
    );
};
