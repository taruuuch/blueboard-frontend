import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { baseURL, timeout } from '../config';

export class ApiClient {
    private static instance: ApiClient;
    private api: AxiosInstance;
    protected config: AxiosRequestConfig = {
        baseURL,
        timeout,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    };

    private constructor() {
        this.api = axios.create(this.config);

        this.api.interceptors.request.use(
            (param: AxiosRequestConfig) => {
                const token: string = 'get token here!';

                if (token) {
                    param.headers.Authorization = `Bearer ${token}`;
                }

                return param;
            },
            (error: Error) => Promise.reject(error)
        );
    }

    static getInstance(): ApiClient {
        if (!ApiClient.instance) {
            ApiClient.instance = new ApiClient();
        }

        return ApiClient.instance;
    }
};
