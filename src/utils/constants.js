const config = {
    endpoint: `https://findfalcone.herokuapp.com`,
};

const headersList = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
};

const defaultDestinationArray = [
    {
        key: 1,
        label: 'Destination 1',
        name: 'destination1',
        selectedPlanet: '',
        planetDistance: 0,
        selectedVehicle: '',
        timeTaken: 0,
    },
    {
        key: 2,
        label: 'Destination 2',
        name: 'destination2',
        selectedPlanet: '',
        planetDistance: 0,
        selectedVehicle: '',
        timeTaken: 0,
    },
    {
        key: 3,
        label: 'Destination 3',
        name: 'destination3',
        selectedPlanet: '',
        planetDistance: 0,
        selectedVehicle: '',
        timeTaken: 0,
    },
    {
        key: 4,
        label: 'Destination 4',
        name: 'destination4',
        selectedPlanet: '',
        planetDistance: 0,
        selectedVehicle: '',
        timeTaken: 0,
    },
];

export { config, headersList, defaultDestinationArray };
