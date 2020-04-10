import React, { useEffect } from 'react';
import { Grid, Loader } from 'semantic-ui-react';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { UserProfileTypes } from '../../types/UserTypes';
import { getUserProfileAction, userUpdateAction } from '../../redux/user/actions';
import { ProfileUpdateForm } from '../../components/ui/Profile/ProfileUpdateForm';

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

    if (isLoading) {
        return <Loader />;
    }

    return (
        <Grid>
            <Grid.Row>
                <Grid.Column>Hello bro!</Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <ProfileUpdateForm
                        isLoading={isLoading}
                        userProfile={profile}
                        handleUpdateProfile={handleSubmitUpdate}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}
