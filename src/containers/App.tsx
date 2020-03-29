import React from 'react';
import { Grid } from 'semantic-ui-react';
import { AuthForm } from '../components/ui/AuthForm/AuthForm';

const App = () => (
    <Grid centered verticalAlign="middle" style={{ height: '100vh' }}>
        <Grid.Row>
            <Grid.Column style={{ maxWidth: 450 }}>
                <AuthForm />
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

export default App;
