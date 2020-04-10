import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import { ILayout } from '../../types/LayoutTypes';

export const AuthLayout = (props: ILayout): JSX.Element => {
    const { children } = props;

    return (
        <Grid textAlign='center' centered verticalAlign="middle" style={{ height: '100vh' }}>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='blue' textAlign='center'>
                    Sing-in to your account
                </Header>
                {children}
            </Grid.Column>
        </Grid>
    );
};
