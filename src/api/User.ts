import { apiClient } from './apiClient';
import { PROFILE_URI } from '../configs/apiConfig';
import { UserProfileTypes } from '../types/UserTypes';

class User {
    profileUri: string;

    constructor() {
        this.profileUri = PROFILE_URI;
    }

    get = async (): Promise<UserProfileTypes> => await apiClient.get(this.profileUri);

    update = async (data: UserProfileTypes): Promise<UserProfileTypes> => await apiClient.put(this.profileUri, data);
}

export const userAPI = new User();
