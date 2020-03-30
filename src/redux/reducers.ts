import { combineReducers, Reducer } from 'redux';
import { userReducer } from './user/reducer';
import { authReducer } from './auth/reducer';
import { notificationReducer } from './notifications/reducer';

export const rootReducer: Reducer = combineReducers({
    notification: notificationReducer,
    auth: authReducer,
    user: userReducer
});
