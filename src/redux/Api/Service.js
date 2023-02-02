import axios from 'axios';

const Service = axios.create({
    baseURL: 'http://localhost:3000',
});

export default Service;
