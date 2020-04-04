import { IAuthenticationState } from './auth/types';
import { combineReducers, Reducer } from 'redux';
import { userReducer } from './user/reducer';
import { authReducer } from './auth/reducer';
import { notificationReducer } from './notifications/reducer';
import { INotificationsState } from './notifications/types';
import { IUserState } from './user/types';

export interface IAppState {
    notification: INotificationsState,
    auth: IAuthenticationState,
    user: IUserState
}

export const rootReducer: Reducer<IAppState> = combineReducers<IAppState>({
    notification: notificationReducer,
    auth: authReducer,
    user: userReducer
});
