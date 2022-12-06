const axios = require("axios");

const request = axios.create({
  baseURL: "http://localhost:8080/gudong",
  timeout: 5000,
});

const TOKEN = "authorize_token";

request.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = localStorage.getItem(TOKEN);
    config.headers["Authorization"] = `${token}`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (response.headers["authorization"]) {
      localStorage.setItem(TOKEN, response.headers["authorization"]);
    }
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

module.exports = { request };
