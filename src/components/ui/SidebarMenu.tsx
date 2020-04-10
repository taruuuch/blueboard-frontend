import React from 'react';
import { Menu, Divider, Header } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export const SidebarMenu = () => (
    <Menu vertical borderless fluid text>
        <Header textAlign='center' className='sidebar__header'>
            BlueBoard
        </Header>
        <Divider />
        <Menu.Item
            as={NavLink}
            to='/trips'
        >
            Trips
        </Menu.Item>
        <Divider />
        <Menu.Item
            as={NavLink}
            to='/profile'
        >
            Profile
        </Menu.Item>
        <Menu.Item
            as={NavLink}
            to='/logout'
        >
            Logout
        </Menu.Item>
    </Menu>
);
