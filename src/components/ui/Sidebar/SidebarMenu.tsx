import React, { useState } from 'react';
import { Menu, Divider, Header, Icon, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import './sidebar.scss';

const navbarLinks = [
    {
        to: '/trip/create',
        icon: <Icon name='write square' />,
        title: 'Create trip'
    }, {
        to: '/trips',
        icon: <Icon name='plane' />,
        title: 'Trips'
    }, {
        to: '/profile',
        icon: <Icon name='id card' />,
        title: 'Profile'
    }, {
        to: '/logout',
        icon: <Icon name='ban' />,
        title: 'Logout'
    }
];

export const SidebarMenu = () => {
    const mobileSize = 768;
    const [dropdown, setDropdown] = useState('none');

    const handleToggleDropdownMenu = () => {
        if (dropdown === 'none') {
            setDropdown('flex');
        } else {
            setDropdown('none');
        }
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
                    style={{ display: dropdown }}
                >
                    {navbarLinks.map(link => (
                        <Menu.Item
                            as={NavLink}
                            to={link.to}
                        >
                            {link.icon}
                            {link.title}
                        </Menu.Item>
                    ))}
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
            {navbarLinks.map(link => (
                <Menu.Item
                    as={NavLink}
                    to={link.to}
                >
                    {link.icon}
                    {link.title}
                </Menu.Item>
            ))}
        </Menu>
    );
};
