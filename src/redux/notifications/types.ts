export const SET_NOTIFICATION = 'SET_NOTIFICATION';
export const GET_NOTIFICATION = 'GET_NOTIFICATION';
export const CLEAR_NOTIFICATION = 'CLEAR_NOTIFICATION';

enum NotificationType {
    'DEFAULT',
    'SUCCESS',
    'WARNING',
    'ERROR'
}

export interface Notifications {
    message: string;
    type: NotificationType;
}

export const notificationState: Notifications = {
    type: NotificationType.DEFAULT,
    message: ''
};

interface SetNotificationAction {
    type: typeof SET_NOTIFICATION;
    payload: Notifications;
}

interface GetNotificationAction {
    type: typeof GET_NOTIFICATION;
}

interface ClearNotificationAction {
    type: typeof CLEAR_NOTIFICATION;
}

export type NotificationsTypes = SetNotificationAction | GetNotificationAction | ClearNotificationAction;
