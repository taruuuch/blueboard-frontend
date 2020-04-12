import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import { TripsList } from '../../ui/Trips/TripsList';
import './tripPage.scss';

export const TripsPage = (params): JSX.Element => {
    const { trips } = params;

    return (
        <Grid padded>
            <Grid.Row>
                <Header dividing as='h3'>
                    Active trips
                </Header>
            </Grid.Row>
            <Grid.Row>
                <TripsList trips={trips} />
            </Grid.Row>
            <Grid.Row>
                <Header dividing as='h3'>
                    Feature trips
                </Header>
            </Grid.Row>
            <Grid.Row>
                <TripsList trips={trips} />
            </Grid.Row>
            <Grid.Row>
                <Header dividing as='h3'>
                    Past trips
                </Header>
            </Grid.Row>
            <Grid.Row>
                <TripsList trips={trips} />
            </Grid.Row>
        </Grid>
    );
};
