const config = {
    endpoint: `https://findfalcone.herokuapp.com`,
};

const headersList = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
};

const getToken = () => sessionStorage.getItem('token');

const getDestinationArray = () => [
    {
        key: 1,
        label: 'Destination 1',
        name: 'destination1',
        value: '',
        distance: 0,
        selectedVehicle: '',
        timeTaken: 0,
    },
    {
        key: 2,
        label: 'Destination 2',
        name: 'destination2',
        value: '',
        distance: 0,
        selectedVehicle: '',
        timeTaken: 0,
    },
    {
        key: 3,
        label: 'Destination 3',
        name: 'destination3',
        value: '',
        distance: 0,
        selectedVehicle: '',
        timeTaken: 0,
    },
    {
        key: 4,
        label: 'Destination 4',
        name: 'destination4',
        value: '',
        distance: 0,
        selectedVehicle: '',
        timeTaken: 0,
    },
];

export { config, headersList, getToken, getDestinationArray };
