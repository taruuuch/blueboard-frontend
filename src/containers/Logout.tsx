import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../redux/auth/actions';

export const Logout = (): JSX.Element => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(logoutAction());
    });

    return (<></>);
};
