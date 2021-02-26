import axios from "axios";
import { AsyncStorage } from "@react-native-community/async-storage";

const instance = axios.create({
    baseURL:
        "http://cba94ffd562f.ngrok.io:3000",
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
