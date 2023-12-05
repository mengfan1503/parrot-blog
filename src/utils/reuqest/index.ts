import axios from "axios";

const TIMEOUT = 5000;
const BASE_URL = "http://localhost:5000";

const request = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
});


request.interceptors.request.use((config)=>{
    return config
})

request.interceptors.response.use((response)=>{
    return response
},function (error){
    return Promise.reject(error);
})

export default request;