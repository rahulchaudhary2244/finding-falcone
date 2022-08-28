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
    },
    {
        key: 2,
        label: 'Destination 2',
        name: 'destination2',
        value: '',
        distance: 0,
        selectedVehicle: '',
    },
    {
        key: 3,
        label: 'Destination 3',
        name: 'destination3',
        value: '',
        distance: 0,
        selectedVehicle: '',
    },
    {
        key: 4,
        label: 'Destination 4',
        name: 'destination4',
        value: '',
        distance: 0,
        selectedVehicle: '',
    },
];

const filterPlanets = (planets, destinationArray, key) => {
    const names = destinationArray
        .filter((item) => item.key !== key && item.value.length)
        .map((item) => item.value);
    const arr = planets.filter(({ name }) => !!!names.includes(name));
    return arr;
};

export { config, headersList, getToken, getDestinationArray, filterPlanets };
