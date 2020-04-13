import React, { useState } from 'react';
import { Form, Button, Segment } from 'semantic-ui-react';
import { AuthFormState, Creadentials } from '../../../types/AuthTypes';
import './authform.scss';

export const AuthForm = (props: AuthFormState): JSX.Element => {
    const { isLoading, handleAuth, handleVerify } = props;
    const [credentials, setCredentials] = useState<Creadentials>({
        email: '',
        password: ''
    });
    const [submitEmail, setSubmitEmail] = useState<boolean>(false);
    const [terms, setTerms] = useState<boolean>(true);

    const handleSendPassword = (): void => {
        if (!credentials.email) return;

        setSubmitEmail(true);
        handleAuth(credentials.email);
    };

    const handleSubmit = (): void => {
        if (!submitEmail || credentials.password.length === 0 || !terms) {
            return;
        }

        handleVerify(credentials);
    };

    const handleEmailChange = (event: any): void => {
        setCredentials({ ...credentials, email: event.target.value });
        setSubmitEmail(false);
    }

    return (
        <Form loading={isLoading}>
            <Segment stacked>
                <Form.Input
                    fluid
                    icon='user'
                    iconPosition='left'
                    // error={!credentials.email}
                    name="email"
                    label="Email"
                    placeholder="example@blueboard.com"
                    onChange={handleEmailChange}
                />
                {submitEmail && (
                    <>
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            error={!credentials.password}
                            name="password"
                            type="password"
                            label="Password"
                            placeholder="Temporary password..."
                            onChange={(e): void => setCredentials({ ...credentials, password: e.target.value })}
                        />
                        <Form.Checkbox
                            toggle
                            defaultChecked={terms}
                            label="I agree to the Terms and Conditions"
                            onChange={(): void => setTerms(!terms)}
                        />
                        <Button
                            color='blue'
                            fluid
                            size='large'
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    </>
                )}
                {!submitEmail && <Button color='blue' fluid onClick={handleSendPassword}>Send password</Button>}
            </Segment>
        </Form>
    );
};
