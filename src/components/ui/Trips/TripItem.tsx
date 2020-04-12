import React from 'react';
import { Grid, Card } from 'semantic-ui-react';
import dayjs from 'dayjs';
import './trips.scss';

export const TripItem = (params): JSX.Element => {
    const { trip, index } = params;

    return (
        <Card
            key={index}
            className='trips__item'
            color='green'
            href='#page'
        >
            <Card.Content>
                <Card.Header content={trip.title} />
                <Card.Meta content={`Create by: ${trip.createdBy}`} />
            </Card.Content>
            <Card.Content extra>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={8}>{dayjs(trip.tripStartDate).format('DD-MM-YYYY HH:mm')}</Grid.Column>
                        <Grid.Column width={8}>{dayjs(trip.tripEndDate).format('DD-MM-YYYY HH:mm')}</Grid.Column>
                    </Grid.Row>
                </Grid>
            </Card.Content>
        </Card>
    );
};
