import React from 'react';
import { Grid, Card } from 'semantic-ui-react';
import tripBackground from '../../../assets/img/sign_back.jpg';
import dayjs from 'dayjs';
import './trips.scss';

export const TripItem = (params): JSX.Element => {
    const { trip, index } = params;

    return (
        <Card
            key={index}
            color='green'
            href='/trip/123'
            className='trips__item'
            style={{ backgroundImage: `url(${tripBackground})` }}
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
