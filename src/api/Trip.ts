import { apiClient } from './apiClient';
import { TRIP_URI } from '../configs/apiConfig';
import { ITrip } from '../types/TripTypes';

class Trip {
    tripUri: string;

    constructor() {
        this.tripUri = TRIP_URI;
    }

    get = async (id: number): Promise<ITrip> => await apiClient.get(`${this.tripUri}/${id}`);

    getAll = async (): Promise<ITrip[]> => await apiClient.get(this.tripUri);

    create = async (trip: ITrip): Promise<ITrip> => await apiClient.post(this.tripUri, trip);

    update = async (trip: ITrip): Promise<ITrip> => await apiClient.put(this.tripUri, trip);
}

export const tripAPI = new Trip();
