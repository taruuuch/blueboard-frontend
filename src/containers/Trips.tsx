import React from 'react';
import { TripsPage } from '../components/pages/TripsPage/TripsPage';

export const Trips = (): JSX.Element => {
    const trips = [
        {
            title: 'Odit repellendus consequuntur',
            tripStartDate: 'Tue Sep 15 2020 10:12:57 GMT+0300 (Eastern European Summer Time)',
            tripEndDate: 'Thu Sep 24 2020 15:13:25 GMT+0300 (Eastern European Summer Time)',
            createdBy: 'Fidel_Herman40'
        },
        {
            title: 'Odit repellendus consequuntur',
            tripStartDate: 'Tue Sep 15 2020 10:12:57 GMT+0300 (Eastern European Summer Time)',
            tripEndDate: 'Thu Sep 24 2020 15:13:25 GMT+0300 (Eastern European Summer Time)',
            createdBy: 'Fidel_Herman40'
        },
        {
            title: 'Odit repellendus consequuntur',
            tripStartDate: 'Tue Sep 15 2020 10:12:57 GMT+0300 (Eastern European Summer Time)',
            tripEndDate: 'Thu Sep 24 2020 15:13:25 GMT+0300 (Eastern European Summer Time)',
            createdBy: 'Fidel_Herman40'
        },
        {
            title: 'Odit repellendus consequuntur',
            tripStartDate: 'Tue Sep 15 2020 10:12:57 GMT+0300 (Eastern European Summer Time)',
            tripEndDate: 'Thu Sep 24 2020 15:13:25 GMT+0300 (Eastern European Summer Time)',
            createdBy: 'Fidel_Herman40'
        },
        {
            title: 'Odit repellendus consequuntur',
            tripStartDate: 'Tue Sep 15 2020 10:12:57 GMT+0300 (Eastern European Summer Time)',
            tripEndDate: 'Thu Sep 24 2020 15:13:25 GMT+0300 (Eastern European Summer Time)',
            createdBy: 'Fidel_Herman40'
        }
    ];

    return <TripsPage trips={trips} />;
};
