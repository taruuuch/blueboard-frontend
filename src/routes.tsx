import { SignUp } from './containers';

export const routes = [
    {
        isExact: true,
        path: '/',
        name: 'Home',
        component: 'Home'
    },
    {
        path: '/',
        name: 'Test',
        component: SignUp
    },
    {
        path: '/profile',
        name: 'Profile',
        component: 'Profile',
        isPrivate: true
    }
];
