import axios from 'axios';

export const API_KEY = '66a80829085f138206554340f458199f';

const api = axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5',
});

export default api;
