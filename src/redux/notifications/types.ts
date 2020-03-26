export const SET_NOTIFICATION = 'SET_NOTIFICATION';
export const GET_NOTIFICATION = 'GET_NOTIFICATION';

enum NotificationType {
    SUCCESS,
    WARNING,
    ERROR
}

export interface Notifications {
    message: string;
    type: NotificationType | null;
}

interface SetNotificationAction {
    type: typeof SET_NOTIFICATION;
    payload: Notifications;
}

interface GetNotificationAction {
    type: typeof GET_NOTIFICATION;
}

export type NotificationsTypes = SetNotificationAction | GetNotificationAction;
