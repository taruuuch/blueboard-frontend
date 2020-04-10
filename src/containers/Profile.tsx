import React, { useEffect } from 'react';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { UserProfileTypes } from '../types/UserTypes';
import { getUserProfileAction, userUpdateAction } from '../redux/user/actions';
import { ProfilePage } from '../components/pages/ProfilePage';

export interface IUserState {
    user: {
        currentProfile: UserProfileTypes;
        isLoading: boolean;
    };
}

const typedUseSelector: TypedUseSelectorHook<IUserState> = useSelector;

export const Profile = (): JSX.Element => {
    const dispatch = useDispatch();
    const isLoading = typedUseSelector(state => state.user.isLoading);
    const profile = typedUseSelector(state => state.user.currentProfile);

    useEffect(() => {
        dispatch(getUserProfileAction());
    }, [dispatch]);

    const handleSubmitUpdate = (user) => {
        dispatch(userUpdateAction(user));
    };

    return <ProfilePage isLoading={isLoading} userProfile={profile} handleUpdateProfile={handleSubmitUpdate}/>;
}
