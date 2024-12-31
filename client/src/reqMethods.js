import axios from "axios"
const BASE_URL = "https://peaza.onrender.com/"

export const userReq = axios.create({
    baseURL: BASE_URL,
});