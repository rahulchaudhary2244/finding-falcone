import { config, headersList } from './utility';
import axios from 'axios';

const persistTokken = async () => {
    try {
        const response = await axios.post(
            `${config.endpoint}/token`,
            {},
            {
                headers: headersList,
            }
        );
        if (response.status === 200 && !!!sessionStorage.getItem('token'))
            sessionStorage.setItem('token', response.data.token);
    } catch (err) {
        console.log('Token not generated');
    }
};

const init = () => {
    persistTokken();
};

export default init;
