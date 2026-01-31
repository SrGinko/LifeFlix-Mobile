import axios from "axios"

const api = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL,
    headers: {
        apiKey: process.env.EXPO_PUBLIC_API_KEY
    }
})

export default api;