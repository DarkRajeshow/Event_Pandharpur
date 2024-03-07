import axios from 'axios';

console.log(process.env.REACT_APP_SERVER_URL); //its showing undefined

const api = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL
});

export default api;