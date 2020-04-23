import { Trips } from './containers/Trips';
import { Auth } from './containers/Auth';
import { Profile } from './containers/Profile';
import { BaseLayout } from './components/layouts/BaseLayout/BaseLayout';
import { AuthLayout } from './components/layouts/AuthLayout/AuthLayout';
import { Logout } from './containers/Logout';
import { IRoutes } from './types/RouteTypes';
import { Trip } from './containers/Trip';
import { CreateTrip } from './containers/CreateTrip';

export const routes: IRoutes[] = [
    {
        path: '/',
        exact: true,
        component: Auth,
        layout: AuthLayout,
        restricted: false
    }, {
        path: '/profile',
        exact: true,
        component: Profile,
        layout: BaseLayout,
        restricted: true
    }, {
        path: '/trips',
        exact: true,
        component: Trips,
        layout: BaseLayout,
        restricted: true
    }, {
        path: '/trip/create',
        exact: true,
        component: CreateTrip,
        layout: BaseLayout,
        restricted: true
    }, {
        path: '/trip/:id',
        component: Trip,
        layout: BaseLayout,
        restricted: true
    }, {
        path: '/logout',
        component: Logout,
        layout: AuthLayout,
        restricted: true
    }
];
