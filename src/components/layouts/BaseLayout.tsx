import React from 'react';
import { Grid } from 'semantic-ui-react';
import { SidebarMenu } from '../ui/Sidebar/SidebarMenu';
import { ILayout } from '../../types/LayoutTypes';

export const BaseLayout = (props: ILayout): JSX.Element => {
    const { children } = props;

    return (
        <div className="App">
            <Grid padded className="mobile only">
                <SidebarMenu />
            </Grid>
            <Grid padded>
                <Grid.Column
                    tablet={3}
                    computer={3}
                    only="tablet computer"
                    id="sidebar"
                >
                    <SidebarMenu />
                </Grid.Column>
                <Grid.Column
                    mobile={16}
                    tablet={13}
                    computer={13}
                    floated="right"
                    id="content"
                >
                    {children}
                </Grid.Column>
            </Grid>
        </div>
    );
};
