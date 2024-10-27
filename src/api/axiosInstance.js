import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8088',
    timeout:10000000
})

axiosInstance.interceptors.request.use((config) => {
    console.log('config',config)
        const token = localStorage.getItem('token') || '12'
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    }, (error => {
        return Promise.reject(error)
    })
)


axiosInstance.interceptors.response.use((response) => {
        return response.data
    },
    error => {
        console.error(error)
        return Promise.reject(error)
    })

export default axiosInstance