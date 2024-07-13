import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.Vite_BASE_URL,
    headers: {
        'Content-Type' : 'application/json'
    },
    timeout: 1000
})

export default instance