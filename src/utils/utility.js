import axios from 'axios';

const config = {
    endpoint: `https://findfalcone.herokuapp.com`,
};

const headersList = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
};

const getToken = async () => {
    const API_URL = `${config.endpoint}/token`;
    const header = {
        headers: headersList,
    };
    try {
        const response = await axios.post(API_URL, {}, header);
        return response.data.token;
    } catch (err) {
        console.log('Token not generated');
        return null;
    }
};

const defaultDestinationArray = [
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

const getTotalByKey = (array, key) =>
    array.reduce((previous, current) => previous + current[key], 0);

const getVehiclesWithUpdatedTotalNoCount = (
    vehicles,
    oldVehicleName,
    newVehicleName
) =>
    vehicles.map((vehicle) => {
        //decreasing count by 1 for current selected vehicle
        if (vehicle.name === newVehicleName)
            return {
                ...vehicle,
                total_no: vehicle.total_no - 1,
            };

        //increasing count by 1 for old vehicle if exist
        if (vehicle.name === oldVehicleName)
            return {
                ...vehicle,
                total_no: vehicle.total_no + 1,
            };
        return vehicle;
    });

const getDestinationsWithNewVehicle = (
    destinations,
    destinationName,
    vehicle
) =>
    destinations.map((destination) => {
        if (destination.name === destinationName)
            return {
                ...destination,
                selectedVehicle: vehicle.name,
                timeTaken: destination.distance / vehicle.speed,
            };
        return destination;
    });

export {
    config,
    headersList,
    getToken,
    defaultDestinationArray,
    footerData,
    getTotalByKey,
    getVehiclesWithUpdatedTotalNoCount,
    getDestinationsWithNewVehicle,
};
