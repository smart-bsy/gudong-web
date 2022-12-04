const axios = require("axios");

const request = axios.create({
  baseURL: "https://73b5-111-222-57-71.jp.ngrok.io",
  timeout: 1000,
});

const TOKEN = "authorize_token";

axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = localStorage.getItem(TOKEN);
    config.headers["Authorization"] = `Bearer ${token}`;
    console.log(config);
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
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

module.exports = { request };
