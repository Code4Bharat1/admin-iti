import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api/admin', // adjust port if different
  withCredentials: true, // if your backend needs cookies/token
});

export default API;
