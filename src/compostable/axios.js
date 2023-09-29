import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://localhost:7012/api/',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer '+ sessionStorage.getItem('token')
    }
});

export default axiosClient;