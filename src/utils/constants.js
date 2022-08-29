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

const footerData = [
    {
        id: 1,
        key: 'challenge',
        link: 'https://www.geektrust.com/challenge/space',
        text: 'Challenge by geektrust.in',
        colour: 'white',
    },
    {
        id: 2,
        key: 'linkedin',
        link: 'https://www.linkedin.com/in/rahulchaudhary2244/',
        text: 'Coded by Rahul Chaudhary',
        colour: '#ffcc70',
    },
    {
        id: 3,
        key: 'github',
        link: 'https://github.com/rahulchaudhary2244',
        text: 'Github',
        colour: 'white',
    },
];

export { config, headersList, defaultDestinationArray, footerData };
