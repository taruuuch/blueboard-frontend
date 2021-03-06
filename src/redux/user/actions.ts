import {
    UserTypes,
    USER_REQUEST,
    USER_SUCCESS,
    USER_FAIL,
    CLEAR_ERRORS
} from './types';
import { userAPI } from '../../api/User';
import { UserProfileTypes } from '../../types/UserTypes';

const userRequestAction = (): UserTypes => ({
    type: USER_REQUEST
});

export const clearErrorsAction = (): UserTypes => ({
    type: CLEAR_ERRORS
});

export const getUserProfileAction = () => (dispatch: any) => {
    dispatch(userRequestAction());

    userAPI
        .get()
        .then(({ data: profile }: any) => {
            dispatch({
                type: USER_SUCCESS,
                payload: {
                    profile
                }
            });
        })
        .catch((err: any) => {
            dispatch({
                type: USER_FAIL,
                payload: err
            });
        });
};

export const userUpdateAction = (user: UserProfileTypes) => (dispatch: any) => {
    dispatch(userRequestAction());

    delete user.status;

    userAPI
        .update(user)
        .then(({ data: profile }: any) => {
            dispatch({
                type: USER_SUCCESS,
                payload: {
                    profile
                }
            });
        })
        .catch((err: any) => {
            dispatch({
                type: USER_FAIL,
                payload: err
            });
        });
};
