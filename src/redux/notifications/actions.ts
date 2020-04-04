import { INotificationsState, NotificationsTypes, GET_NOTIFICATION, SET_NOTIFICATION, CLEAR_NOTIFICATION } from './types';

export const setNotification = (notification: INotificationsState): NotificationsTypes => ({
    type: SET_NOTIFICATION,
    payload: notification
});

export const getNotification = (): NotificationsTypes => ({
    type: GET_NOTIFICATION
});

export const clearNotification = (): NotificationsTypes => ({
    type: CLEAR_NOTIFICATION
});
