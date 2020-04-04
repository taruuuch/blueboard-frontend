export const SET_NOTIFICATION = 'SET_NOTIFICATION';
export const GET_NOTIFICATION = 'GET_NOTIFICATION';
export const CLEAR_NOTIFICATION = 'CLEAR_NOTIFICATION';

enum NotificationType {
    'DEFAULT',
    'SUCCESS',
    'WARNING',
    'ERROR'
}

export interface INotificationsState {
    type: NotificationType;
    message: string;
}

export const notificationState: INotificationsState = {
    type: NotificationType.DEFAULT,
    message: ''
};

interface SetNotificationAction {
    type: typeof SET_NOTIFICATION;
    payload: INotificationsState;
}

interface GetNotificationAction {
    type: typeof GET_NOTIFICATION;
}

interface ClearNotificationAction {
    type: typeof CLEAR_NOTIFICATION;
}

export type NotificationsTypes = SetNotificationAction | GetNotificationAction | ClearNotificationAction;
