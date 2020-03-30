import React from 'react';
import { Grid, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export const Trips = (): JSX.Element => {
    return (
        <Grid centered verticalAlign="middle" style={{ height: '100vh' }}>
            <Grid.Row>
                <Grid.Column style={{ maxWidth: 450 }}>
                    Trip list page
                    <Divider/>
                    <Link to="/profile">Profile</Link>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};
