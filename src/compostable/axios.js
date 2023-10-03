import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://localhost:7012/api/',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer '+ sessionStorage.getItem('token')
    }
});
axiosClient.interceptors.request.use(async (config) => {
    console.log(config);
    config.headers.Authorization = 'Bearer '+ sessionStorage.getItem('token');
    return config;
});
axiosClient.interceptors.response.use((response) => {
    console.log(response);
    if(!response.data.isOk)
    {
        console.log(response.data.data);
    }
    return response.data.data;
}, (error) => {
    if (error.response.status === 401) {
        //sessionStorage.setItem('token', '');
        //window.location = '/auth/login';
    }
    return Promise.reject(error);
});

export default axiosClient;