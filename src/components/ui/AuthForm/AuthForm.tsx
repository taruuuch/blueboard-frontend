import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { signInAction, verifyAccessAction } from '../../../redux/auth/actions';
import './authform.scss';

interface AuthFormState {
    auth: {
        isLoading: boolean;
    };
}

const typedUseSelector: TypedUseSelectorHook<AuthFormState> = useSelector;

export const AuthForm = () => {
    const [submitEmail, setSubmitEmail] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [terms, setTerms] = useState(true);

    const dispatch = useDispatch();
    const isLoading = typedUseSelector((state) => state.auth.isLoading);

    const handleSendPassword = () => {
        if (!email) return;

        setSubmitEmail(true);

        dispatch(signInAction(email));
    };

    const handleSubmit = () => {
        if (!email || password.length === 0 || !terms) {
            return;
        }

        const creadentials = {
            email,
            password
        };

        dispatch(verifyAccessAction(creadentials));
    };

    return (
        <Form loading={isLoading}>
            <Form.Input
                fluid
                name="email"
                label="Email"
                placeholder="example@blueboard.com"
                onChange={(e): unknown => setEmail(e.target.value)}
            />
            {submitEmail && (
                <>
                    <Form.Input
                        fluid
                        name="password"
                        type="password"
                        label="Password"
                        placeholder="Temporary password..."
                        onChange={(e): unknown => setPassword(e.target.value)}
                    />
                    <Form.Checkbox
                        toggle
                        defaultChecked={terms}
                        label="I agree to the Terms and Conditions"
                        onChange={(): unknown => setTerms(!terms)}
                    />
                </>
            )}
            {!submitEmail ? (
                <Button onClick={handleSendPassword}>Send password</Button>
            ) : (
                <Button onClick={handleSubmit}>Submit</Button>
            )}
        </Form>
    );
};
