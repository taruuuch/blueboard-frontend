import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { AuthFormState, Creadentials } from '../../../containers/Auth/AuthTypes';
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

    return (
        <Form loading={isLoading}>
            <Form.Input
                fluid
                error={!credentials.email}
                name="email"
                label="Email"
                placeholder="example@blueboard.com"
                onChange={(e): void => setCredentials({ ...credentials, email: e.target.value })}
            />
            {submitEmail && (
                <>
                    <Form.Input
                        fluid
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
                    <Button onClick={handleSubmit}>Submit</Button>
                </>
            )}
            {!submitEmail && <Button onClick={handleSendPassword}>Send password</Button>}
        </Form>
    );
};
