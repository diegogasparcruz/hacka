import axios from 'axios';

const api = axios.create({
  baseURL: 'http://54.167.230.163:3333'
});

export default api;