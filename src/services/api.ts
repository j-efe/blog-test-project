import axios from "axios";

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 10000,

  headers: { 'Content-Type': 'Application/JSON' }
});

export default api;