import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { timeout } from '../configs/apiConfig';
import { authAPI } from './Auth';

const config: AxiosRequestConfig = {
    // baseURL,
    timeout,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
};

export const apiClient: AxiosInstance = axios.create(config);

apiClient.interceptors.request.use(
    async (param: AxiosRequestConfig) => {
        const token = authAPI.getJWT().accessToken;

        if (token) {
            param.headers.Authorization = `Bearer ${token}`;
        }

        return param;
    },
    (error: Error) => Promise.reject(error)
);
