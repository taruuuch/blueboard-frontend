import { Notifications, GET_NOTIFICATION, SET_NOTIFICATION, NotificationsTypes } from './types';

export const setNotification = (notification: Notifications): NotificationsTypes => ({
    type: SET_NOTIFICATION,
    payload: notification
});

export const getNotification = (): NotificationsTypes => ({
    type: GET_NOTIFICATION
});
