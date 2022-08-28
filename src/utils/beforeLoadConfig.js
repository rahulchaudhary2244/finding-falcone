import { config, headersList } from './utility';
import axios from 'axios';

const persistTokken = async () => {
    const API_URL = `${config.endpoint}/token`;
    const header = {
        headers: headersList,
    };
    try {
        const response = await axios.post(API_URL, {}, header);
        if (response.status === 200)
            sessionStorage.setItem('token', response.data.token);
        return response.data.token;
    } catch (err) {
        console.log('Token not generated');
        return null;
    }
};

const init = () => {
    persistTokken();
};

export default init;
