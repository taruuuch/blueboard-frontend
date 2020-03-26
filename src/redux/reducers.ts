import { combineReducers, Reducer } from 'redux';
import { notificationReducer } from './notifications/reducers';

export const rootReducer: Reducer = combineReducers({
    notification: notificationReducer
});
