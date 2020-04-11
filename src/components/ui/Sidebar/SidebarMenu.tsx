import React, { useState } from 'react';
import { Menu, Divider, Header, Icon, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import './sidebar.scss';

export const SidebarMenu = () => {
    const mobileSize = 768;
    const [dropdown, setDropdown] = useState({ display: 'none' });

    const handleToggleDropdownMenu = () => {
        const newState = {
            display: ''
        };

        if (dropdown.display === 'none') {
            newState.display = 'flex';
        } else {
            newState.display = 'none';
        }

        setDropdown(newState);
    }

    if (window.innerWidth < mobileSize) {
        return (
            <Menu borderless fluid fixed='top'>
                <Menu.Item header as='a'>
                    BlueBoard
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Button
                            basic
                            icon
                            toggle
                            onClick={handleToggleDropdownMenu}
                        >
                            <Icon name="content" />
                        </Button>
                    </Menu.Item>
                </Menu.Menu>
                <Menu
                    pointing
                    secondary
                    fluid
                    vertical
                    style={dropdown}
                >
                    <Menu.Item
                        as={NavLink}
                        to='/trips'
                    >
                        <Icon name='plane' />
                        Trips
                    </Menu.Item>
                    <Menu.Item
                        as={NavLink}
                        to='/profile'
                    >
                        <Icon name='id card' />
                        Profile
                    </Menu.Item>
                    <Divider fitted />
                    <Menu.Item
                        as={NavLink}
                        to='/logout'
                    >
                        <Icon name='ban' />
                        Logout
                    </Menu.Item>
                </Menu>
            </Menu>
        );
    }

    return (
        <Menu vertical borderless fluid text>
            <Header textAlign='center' className='sidebar__header'>
                BlueBoard
            </Header>
            <Divider />
            <Menu.Item
                as={NavLink}
                to='/trips'
            >
                <Icon name='plane' />
                Trips
            </Menu.Item>
            <Divider />
            <Menu.Item
                as={NavLink}
                to='/profile'
            >
                <Icon name='id card' />
                Profile
            </Menu.Item>
            <Menu.Item
                as={NavLink}
                to='/logout'
            >
                <Icon name='ban' />
                Logout
            </Menu.Item>
        </Menu>
    );
};
