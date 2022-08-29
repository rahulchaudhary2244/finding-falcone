import axios from 'axios';
import { config, headersList } from './constants';

/**
 *
 * @returns {string|null} returns JWT token fetched from backend
 */
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

export { getToken };
