export interface AuthState {
    auth: {
        isLoading: boolean;
    };
}

export interface AuthFormState {
    isLoading: boolean;
    handleAuth: Function;
    handleVerify: Function;
}

export interface Creadentials {
    email: string;
    password: string;
}
