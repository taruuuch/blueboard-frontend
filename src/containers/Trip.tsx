import React from 'react';
import { TripPage } from '../components/pages/TripPage';
import { useParams } from 'react-router-dom';

export const Trip = (): JSX.Element => {
    const { id: tripId } = useParams();

    const trip = {
        title: 'Odit repellendus consequuntur',
        description: 'Dolor voluptate iste similique. Et ex reprehenderit vel non consequuntur est delectus. At laudantium non. Consequatur sit et maiores consequatur quia.',
        tripStartDate: 'Tue Sep 15 2020 10:12:57 GMT+0300 (Eastern European Summer Time)',
        tripEndDate: 'Thu Sep 24 2020 15:13:25 GMT+0300 (Eastern European Summer Time)',
        createdBy: 'Fidel_Herman40'
    };

    return <TripPage trip={trip} />;
};
