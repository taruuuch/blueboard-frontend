import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../redux/auth/actions';
import { Loader } from 'semantic-ui-react';

export const Logout = (): JSX.Element => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(logoutAction());
    });

    return (<Loader>Logout</Loader>);
};
