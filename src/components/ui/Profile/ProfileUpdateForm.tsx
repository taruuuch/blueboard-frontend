import React, { useState, useEffect } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { UserProfileTypes } from '../../../types/UserTypes';
import './profile.scss';

interface IProfileUpdateState {
    isLoading: boolean;
    handleUpdateProfile: Function;
    userProfile: UserProfileTypes;
}

export const ProfileUpdateForm = (props: IProfileUpdateState): JSX.Element => {
    const { isLoading, handleUpdateProfile, userProfile } = props;
    const [userData, setUserData] = useState<UserProfileTypes>({} as UserProfileTypes);

    useEffect(() => {
        setUserData(userProfile);
    }, [userProfile])

    return (
        <Form loading={isLoading}>
            <Form.Input
                fluid
                disabled
                name="email"
                label="Email"
                placeholder="example@blueboard.com"
                value={userData.email}
                onChange={(e): void => setUserData({ ...userData, email: e.target.value })}
            />
            <Form.Input
                fluid
                name="firstname"
                label="First name"
                placeholder="e.g.: John"
                value={userData.firstName}
                onChange={(e): void => setUserData({ ...userData, firstName: e.target.value })}
            />
            <Form.Input
                fluid
                name="lastname"
                label="Last name"
                placeholder="e.g.: Smith"
                value={userData.lastName}
                onChange={(e): void => setUserData({ ...userData, lastName: e.target.value })}
            />
            <Form.Input
                fluid
                name="username"
                label="Username"
                placeholder="Enter your username..."
                value={userData.username}
                onChange={(e): void => setUserData({ ...userData, username: e.target.value })}
            />
            <Form.Input
                fluid
                name="phone"
                label="Phone"
                placeholder="Enter your phone number..."
                value={userData.phone}
                onChange={(e): void => setUserData({ ...userData, phone: e.target.value })}
            />
            <Button onClick={() => handleUpdateProfile(userData)}>Update profile</Button>
        </Form>
    );
};
