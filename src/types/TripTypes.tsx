export interface ITrip {
    id: Number;
    name: string;
    description: string;
    startDate: string;
    endDate: string;
}

export interface ITripState {
    trip: {
        currentTrip: ITrip;
        trips: ITrip[];
        isLoading: boolean;
    };
}
