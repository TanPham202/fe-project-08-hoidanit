import axios from 'axios';
import { toast } from 'react-toastify';

const instance = axios.create({
    baseURL: 'http://localhost:8080'
})

instance.defaults.withCredentials = true;

instance.interceptors.request.use(function (config){
    return config;
}, function(error){
    return Promise.reject(error);
})

instance.interceptors.response.use(function (response){
    return response.data;
}, function(error){
    const status = error && error.response && error.response.status || 500;
    switch(status){
        case 401: {
            toast.error('Unauthorized the suer. PLease login...');
            return Promise.reject(error);
        }
        case 403: {
            toast.error(`You don't have permission to access this resource...`);
            return Promise.reject(error);
        }
        case 400: {
            return Promise.reject(error);
        }
        case 404: {
            return Promise.reject(error);
        }
        case 409: {
            return Promise.reject(error);
        }
        case 422: {
            return Promise.reject(error);
        }
        default: {
            return Promise.reject(error);
        }
    }
})

export default instance;