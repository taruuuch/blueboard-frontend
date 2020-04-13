import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import tripBack from '../../assets/img/sign_back.jpg';

export const TripPage = (params): JSX.Element => {
    const { trip } = params;

    return (
        <Grid className='trip'>
            <Grid.Row style={{ backgroundImage: `url(${tripBack})`}} className='trip__header'>
                <Header as='h3' className='trip__header-title'>
                    {trip.title}
                </Header>
            </Grid.Row>
            <Grid.Row>
                {trip.createdBy}
            </Grid.Row>
            <Grid.Row>
                {trip.createdBy}
            </Grid.Row>
            <Grid.Row>
                {trip.createdBy}
            </Grid.Row>
            <Grid.Row>
                {trip.createdBy}
            </Grid.Row>
        </Grid>
    );
};
