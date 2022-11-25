import axios from "axios";
import { url } from "./BackendUrl";

const instance = axios.create({
  baseURL: url,
  timeout: 1000,
});

instance.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json; charset=utf-8";
    config.headers["Authorization"] = localStorage.getItem("login-token");
    return config;
  },
  (e) => {
    console.log(e);
    return Promise.reject(e);
  }
);

instance.interceptors.response.use(
  (res) => {
    console.log("axios interceptor", res);
    return res;
  },
  (e) => {
    console.log("응답에러", e);
    return Promise.reject(e);
  }
);

export default instance;
