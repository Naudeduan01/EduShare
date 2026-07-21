import axios from "axios";
const api = axios.create({
    baseURL: "https://5p48xt1yd0.execute-api.us-east-1.amazonaws.com/"
});
api.interceptors.request.use(
    config => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization =
                `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
export default api;