import axios from "axios";
import router from "../router";

const axiosClient = axios.create({
    baseURL: 'https://localhost:7012/api/',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer '+ sessionStorage.getItem('token')
    }
});
axiosClient.interceptors.request.use(async (config) => {
    config.headers.Authorization = 'Bearer '+ sessionStorage.getItem('token');
    return config;
});
axiosClient.interceptors.response.use((response) => {

    if(!response.data.isOk)
    {
        console.log(response.data.data);
    }
    return response.data.data;
}, (error) => {
    console.log(error)
    if (error.response.status === 401 || error.response.status === 403) {
        sessionStorage.setItem('token', '');
        router.go({name:"login"});
    }
    return error;
});

export default axiosClient;