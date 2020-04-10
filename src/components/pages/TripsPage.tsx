import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

export const TripsPage = (): JSX.Element => (
    <Grid padded>
        <Grid.Row>
            <Header dividing size="huge" as="h1">
                Your trips
            </Header>
        </Grid.Row>
        <Grid.Row>
            Trip list
        </Grid.Row>
    </Grid>
);
