import axios from 'axios';
// Cel 'http://192.168.43.243:3333',
// Wifi 'http://192.168.15.8:3333',

export const baseURL = 'http://192.168.15.8:3333';

const api = axios.create({
  baseURL,
});

export default api;
