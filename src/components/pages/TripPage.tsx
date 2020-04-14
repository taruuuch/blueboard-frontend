import React from 'react';
import { TripInfo } from '../ui/Trip/TripInfo';
import { Grid, Header } from 'semantic-ui-react';
import tripBack from '../../assets/img/sign_back.jpg';
import '../ui/Trip/trip.scss';

export const TripPage = (params): JSX.Element => {
    const { trip } = params;

    return (
        <Grid className='trip'>
             <Grid.Row style={{ backgroundImage: `url(${tripBack})`}} className='trip__header'>
                <Header as='h3' className='trip__header-title'>
                    {trip.title}
                </Header>
            </Grid.Row>
            <TripInfo {...params} />
        </Grid>
    );
};
