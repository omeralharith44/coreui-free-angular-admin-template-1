import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        // Authorization: 'Beareer' + localStorage.getItem('token'),
    }
});

export default apiClient;

