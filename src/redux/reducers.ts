import { combineReducers, Reducer } from 'redux';
import { notificationReducer } from './notifications/reducer';

export const rootReducer: Reducer = combineReducers({
    notification: notificationReducer
});
