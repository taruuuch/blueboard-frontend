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
        component: 'Test'
    },
    {
        path: '/profile',
        name: 'Profile',
        component: 'Profile',
        isPrivate: true
    }
];
