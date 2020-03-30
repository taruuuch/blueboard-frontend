import {
    User,
    UserTypes,
    USER_REQUEST,
    USER_SUCCESS,
    USER_FAIL,
    CLEAR_ERRORS
} from './types';
import { userAPI, UserProfileTypes } from '../../api/User';

const userRequestAction = (): UserTypes => ({
    type: USER_REQUEST
});

const userSuccessAction = (user: User): UserTypes => ({
    type: USER_SUCCESS,
    payload: user
});

const userFailtAction = (user: User): UserTypes => ({
    type: USER_FAIL,
    payload: user
});

export const clearErrorsAction = (): UserTypes => ({
    type: CLEAR_ERRORS
});

export const getUserProfileAction = () => (dispatch: any) => {
    dispatch(userRequestAction());

    userAPI
        .get()
        .then(({ data }: any) => {
            dispatch(userSuccessAction(data.profile));
        })
        .catch((err) => {
            dispatch(userFailtAction(err));
        });
};

export const userUpdateAction = (user: UserProfileTypes) => (dispatch: any) => {
    dispatch(userRequestAction());

    userAPI
        .update(user)
        .then(({ data }: any) => {
            dispatch(userSuccessAction(data.profile));
        })
        .catch((err) => {
            dispatch(userFailtAction(err));
        });
};
