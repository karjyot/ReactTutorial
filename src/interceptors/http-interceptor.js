import axios from "axios";
import  LoginService  from './../services/auth-service'
// export const axiosInstance = axios.create({
//   baseURL: "https://swapi.dev/api/",
// });

axios.interceptors.request.use(
  function (config) {
   const token = LoginService.getAccessToken();
   if (token) {
    config.headers["x-access-token"] = token;
   }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
   // console.log(error)
    return Promise.reject(error);
  }
);