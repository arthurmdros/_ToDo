import axios from 'axios';

const api = axios.create({
    baseURL: 'http://IpDaSuaMaquina:3333'
});

export default api;
