import { IAuthenticationState } from './auth/types';
import { combineReducers, Reducer } from 'redux';
import { userReducer } from './user/reducer';
import { authReducer } from './auth/reducer';
import { tripReducer } from './trip/reducer';
import { notificationReducer } from './notifications/reducer';
import { INotificationsState } from './notifications/types';
import { IUserState } from './user/types';
import { ITripState } from './trip/types';

export interface IAppState {
    notification: INotificationsState;
    auth: IAuthenticationState;
    user: IUserState;
    trip: ITripState;
}

export const rootReducer: Reducer<IAppState> = combineReducers<IAppState>({
    notification: notificationReducer,
    auth: authReducer,
    user: userReducer,
    trip: tripReducer
});
