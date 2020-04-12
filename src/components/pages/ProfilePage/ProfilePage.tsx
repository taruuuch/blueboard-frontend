import React from 'react';
import { Grid } from 'semantic-ui-react';
import { ProfileUpdateForm } from '../../ui/Profile/ProfileUpdateForm';

export const ProfilePage = (props): JSX.Element => {
    return (
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <ProfileUpdateForm {...props}/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}
