import {
    INotificationsState,
    NotificationsTypes,
    notificationState,
    GET_NOTIFICATION,
    SET_NOTIFICATION,
    CLEAR_NOTIFICATION
} from './types';

export const notificationReducer = (state = notificationState, action: NotificationsTypes): INotificationsState => {
    switch (action.type) {
        case SET_NOTIFICATION:
            return {
                ...state,
                type: action.payload.type,
                message: action.payload.message
            };
        case GET_NOTIFICATION:
            return {
                ...state
            };
        case CLEAR_NOTIFICATION:
            return state;
        default:
            return state;
    }
};
