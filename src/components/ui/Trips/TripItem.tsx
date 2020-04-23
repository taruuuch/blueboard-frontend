import React from 'react';
import { Grid, Card } from 'semantic-ui-react';
import tripBackground from '../../../assets/img/sign_back.jpg';
import dayjs from 'dayjs';
import './trips.scss';
import { ITrip } from '../../../types/TripTypes';

interface ITripItem {
    trip: ITrip;
};

export const TripItem = (params: ITripItem): JSX.Element => {
    const { trip } = params;
    const href = `/trip/${trip.id}`;

    return (
        <Card
            key={Number(trip.id)}
            color='green'
            href={href}
            className='trips__item'
            style={{ backgroundImage: `url(${tripBackground})` }}
        >
            <Card.Content>
                <Card.Header content={trip.name} />
                {/* <Card.Meta content={`Create by: ${trip.createdBy}`} /> */}
            </Card.Content>
            <Card.Content extra>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={8}>{dayjs(trip.startDate).format('DD-MM-YYYY HH:mm')}</Grid.Column>
                        <Grid.Column width={8}>{dayjs(trip.endDate).format('DD-MM-YYYY HH:mm')}</Grid.Column>
                    </Grid.Row>
                </Grid>
            </Card.Content>
        </Card>
    );
};
