import axios from "axios";
import { AsyncStorage } from "react-native";

const instance = axios.create({
    baseURL:
        "http://ec2-13-250-113-121.ap-southeast-1.compute.amazonaws.com:3000",
});

instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default instance;
