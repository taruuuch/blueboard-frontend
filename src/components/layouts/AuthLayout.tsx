import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import { ILayout } from '../../types/LayoutTypes';
import signBack from '../../assets/img/sign_back.jpg';
import './authLayout.scss';

export const AuthLayout = (props: ILayout): JSX.Element => {
    const { children } = props;

    return (
        <Grid
            textAlign='center'
            centered
            verticalAlign="middle"
            className='auth'
            style={{ backgroundImage: `url(${signBack})` }}
        >
            <Grid.Column className='auth-container'>
                <Header
                    as='h2'
                    textAlign='center'
                    className='auth-header'
                >
                    Sing-in to your account
                </Header>
                {children}
            </Grid.Column>
        </Grid>
    );
};
