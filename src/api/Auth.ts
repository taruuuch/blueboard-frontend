import { apiClient } from './apiClient';
import { SIGN_IN_URI, SIGN_UP_URI, VERIFY_URI } from '../configs/apiConfig';

interface JWT {
    accessToken: string;
    expire: number;
}

class Auth {
    signInUri: string;
    signUpUri: string;
    verifyAccessUri: string;

    constructor() {
        this.signInUri = SIGN_IN_URI;
        this.signUpUri = SIGN_UP_URI;
        this.verifyAccessUri = VERIFY_URI;
    }

    signIn = async (data: object): Promise<object> => await apiClient.post(this.signInUri, data);

    signUp = async (data: object): Promise<object> => await apiClient.post(this.signUpUri, data);

    verifyAccess = async (data: object): Promise<object> => await apiClient.post(this.verifyAccessUri, data);

    setJWT = (jwt: JWT): void => localStorage.setItem('token', JSON.stringify(jwt));

    getJWT = (): JWT => JSON.parse(localStorage.getItem('token') || '{}');

    isAuth = (): boolean => !this.getJWT().accessToken;
}

export const authAPI = new Auth();
