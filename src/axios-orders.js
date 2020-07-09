import axios from 'axios';

const instance = axios.create({
    baseURL: 'GIVE_YOUR_API_BASE_URL'
});

export default instance;