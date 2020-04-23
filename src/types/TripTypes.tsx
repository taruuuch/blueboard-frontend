export interface ITrip {
    id: BigInt;
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
}

export interface ITripState {
    trip: {
        currentTrip: ITrip;
        trips: ITrip[];
        isLoading: boolean;
    };
}
