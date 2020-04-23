import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import { TripsList } from '../ui/Trips/TripsList';
import { ITrip } from '../../types/TripTypes';

interface ITripsPage {
    trips: ITrip[];
    isLoading: boolean;
};

export const TripsPage = (params: ITripsPage): JSX.Element => {
    const { trips, isLoading } = params;

    return (
        <Grid padded>
            <Grid.Row>
                <Header dividing as='h3'>
                    Active trips
                </Header>
            </Grid.Row>
            <Grid.Row>
                <TripsList trips={trips} isLoading={isLoading} />
            </Grid.Row>
        </Grid>
    );
};
