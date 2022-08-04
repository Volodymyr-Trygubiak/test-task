import axios from "axios";

const authApi = axios.create({
  baseURL: 'https://frontend-test-assignment-api.abz.agency/api/v1',
  headers: { 'Content-type': 'application/json' }
})

authApi.interceptors.request.use(config => {
  // if (store.state.auth.token) {
  //   config.headers.Authorization = `Bearer ${store.state.auth.token}`
  // }
  // config.headers.Authorization = ``
  return config
})

authApi.interceptors.response.use(
  (response) => {
    // console.log(response);
    return response.data;
  },
  error => {

    return Promise.reject(error);
  }
);


export default authApi;

