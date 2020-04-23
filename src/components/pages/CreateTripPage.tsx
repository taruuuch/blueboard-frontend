import React, { useState } from 'react';
import { Form, Button, TextArea, Container } from 'semantic-ui-react';
import { ITrip } from '../../types/TripTypes';
import dayjs from 'dayjs';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import '../ui/Trip/trip.scss';

interface ICreateTripPage {
    handleSubmitSaveTrip: Function;
    isLoading: boolean;
};

export const CreateTripPage = (params: ICreateTripPage): JSX.Element => {
    const [trip, setTrip] = useState({} as ITrip)
    const { handleSubmitSaveTrip, isLoading } = params;

    const onChangeDate = (_e: any, data: any): void => {
        const startDate = data.value ? data.value[0] : '';
        const endDate = data.value ? data.value[1] : '';

        setTrip({
            ...trip,
            startDate,
            endDate
        });
    }

    return (
        <Form loading={isLoading}>
            <Form.Input
                fluid
                name="name"
                label="Name"
                placeholder="exp: Cyprus 2020"
                value={trip.name}
                onChange={(e: any): void => setTrip({ ...trip, name: e.target.value })}
            />
            <Form.Field
                control={TextArea}
                fluid
                name="description"
                label="Description"
                placeholder="Input description of trip..."
                value={trip.description}
                onChange={(e: any): void => setTrip({ ...trip, description: e.target.value })}
            />
            <SemanticDatepicker
                type="range"
                label='Date'
                minDate={dayjs().toDate()}
                maxDate={dayjs().add(10, 'year').toDate()}
                firstDayOfWeek={1}
                onChange={onChangeDate}
            />
            <Container fluid>
                <Button
                    color='blue'
                    floated='right'
                    onClick={() => handleSubmitSaveTrip(trip)}
                >
                    Save trip
                </Button>
            </Container>
        </Form>
    );
};
