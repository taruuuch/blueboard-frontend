import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { /*baseURL,*/ timeout } from '../configs/apiConfig';

const config: AxiosRequestConfig = {
    // baseURL,
    timeout,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
};

export const apiClient: AxiosInstance = axios.create(config);

axios.interceptors.request.use(
    (param: AxiosRequestConfig) => {
        const token = 'get token here!';

        if (token) {
            param.headers.Authorization = `Bearer ${token}`;
        }

        return param;
    },
    (error: Error) => Promise.reject(error)
);
