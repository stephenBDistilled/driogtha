const axios = require('axios').default;

export const axiosInstance = axios.create({
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});
