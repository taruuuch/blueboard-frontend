import { apiClient } from './apiClient';
import { SIGN_IN_URI, SIGN_UP_URI, VERIFY_URI } from '../config';

class AuthApi {
    signIn = async (data: object): Promise<object> => await apiClient.post(SIGN_IN_URI, data);

    signUp = async (data: object): Promise<object> => await apiClient.post(SIGN_UP_URI, data);

    verifyAccess = async (data: object): Promise<object> => await apiClient.post(VERIFY_URI, data);
}

export const authAPI = new AuthApi();
