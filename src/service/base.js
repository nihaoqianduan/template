/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import http from "axios";
import qs from "qs";
import axaxConfig from "../config/ajaxConfig";

http.defaults.baseURL = axaxConfig._urlPrefixes;

http.defaults.timeout = 30 * 1000;
// http.defaults.headers.post["Content-Type"] =
//   "application/x-www-form-urlencoded;charset=UTF-8";
http.defaults.headers.post["Content-Type"] = "application/json";

http.interceptors.request.use(
  (config) => {
    if (config.method === "post") {
      // config.data = qs.stringify(config.data);
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (res) => res,
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default http;
