import { Notifications, GET_NOTIFICATION, SET_NOTIFICATION, NotificationsTypes } from './types';

const initialState: Notifications = {
    type: null,
    message: ''
};

export const notificationReducer = (state = initialState, action: NotificationsTypes): Notifications => {
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
        default:
            return state;
    }
};
