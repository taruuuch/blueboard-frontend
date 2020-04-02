import React, { useEffect, useState } from 'react';
import { Grid, Loader, Form, Button } from 'semantic-ui-react';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { UserProfileTypes } from '../../types/UserTypes';
import { getUserProfileAction, userUpdateAction } from '../../redux/user/actions';

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
    const profile = typedUseSelector(state => state.user.currentProfile);
    const [userData, setUserData] = useState<UserProfileTypes>({
        firstName: '',
        lastName: '',
        username: '',
        email: profile.email,
        phone: '',
    });

    const handleSubmitUpdate = () => {
        dispatch(userUpdateAction(userData));
    };

    useEffect(() => {
        dispatch(getUserProfileAction());
    }, [dispatch]);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <Grid>
            <Grid.Row>
                <Grid.Column>Hello, {profile.email}</Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Form loading={isLoading}>
                        <Form.Input
                            fluid
                            name="firstname"
                            label="First name"
                            placeholder="e.g.: John"
                            onChange={(e): void => setUserData({ ...userData, firstName: e.target.value })}
                        />
                        <Form.Input
                            fluid
                            name="lastname"
                            label="Last name"
                            placeholder="e.g.: Smith"
                            onChange={(e): void => setUserData({ ...userData, lastName: e.target.value })}
                        />
                        <Form.Input
                            fluid
                            name="username"
                            label="Username"
                            placeholder="Enter your username..."
                            onChange={(e): void => setUserData({ ...userData, username: e.target.value })}
                        />
                        <Form.Input
                            fluid
                            name="phone"
                            label="Phone"
                            placeholder="Enter your phone number..."
                            onChange={(e): void => setUserData({ ...userData, phone: e.target.value })}
                        />
                        <Button onClick={handleSubmitUpdate}>Update profile</Button>
                    </Form>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}
