import axios from 'axios';
import { config } from './utility';

const getPlanets = async () => {
    try {
        const response = await axios.get(`${config.endpoint}/planets`);
        if (response.status === 200) return response.data;
    } catch (err) {
        console.log('Fetching planets failed');
        return [];
    }
};

const getVehicles = async () => {
    try {
        const response = await axios.get(`${config.endpoint}/vehicles`);
        if (response.status === 200) return response.data;
    } catch (err) {
        console.log('Fetching vehicles failed');
        return [];
    }
};

export { getPlanets, getVehicles };
