enum NotificationType {
    SUCCESS,
    WARNING,
    ERROR
};

export interface Notifications {
    message: string,
    type: NotificationType
};

export const SET_NOTIFICATION: string = 'SET_NOTIFICATION';
export const GET_NOTIFICATION: string = 'GET_NOTIFICATION';
