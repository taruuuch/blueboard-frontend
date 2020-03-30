import React, { useEffect } from 'react';
import { Grid, Loader } from 'semantic-ui-react';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { UserProfileTypes } from '../../api/User';
import { getUserProfileAction } from '../../redux/user/actions';

export interface UserState {
    user: {
        currentProfile: UserProfileTypes;
        isLoading: boolean;
    };
}

const typedUseSelector: TypedUseSelectorHook<UserState> = useSelector;

export const Profile = (): JSX.Element => {
    const dispatch = useDispatch();
    const isLoading = typedUseSelector(state => state.user.isLoading);
    const user = typedUseSelector(state => state.user.currentProfile);

    useEffect(() => {
        dispatch(getUserProfileAction());
    }, [dispatch]);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <Grid centered verticalAlign="middle" style={{ height: '100vh' }}>
            <Grid.Row>
                <Grid.Column style={{ maxWidth: 450 }}>Hello, {user.email}</Grid.Column>
            </Grid.Row>
        </Grid>
    );
}
