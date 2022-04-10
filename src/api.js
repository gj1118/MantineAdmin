import axios from 'axios';

const service = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

service.interceptors.request.use(
  async request => {
    request.headers = {
      Authorization: `Bearer 123456789`,
    };
    return request;
  },
  error => Promise.reject(error)
);

export default service;