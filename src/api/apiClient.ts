import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { baseURL, timeout } from '../configs/apiConfig';
import { authAPI } from './Auth';
import { history } from './../helpers/history';

const config: AxiosRequestConfig = {
    baseURL,
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
    (error) => {
        if (error.response.status !== 401) {
            return Promise.reject(error);
        }

        localStorage.removeItem('token');
        history.push('/');
    }
);
