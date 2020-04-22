import axios from "axios";

export default axios.create({
    baseURL: "http://ec2-13-250-113-121.ap-southeast-1.compute.amazonaws.com:3000",
});
