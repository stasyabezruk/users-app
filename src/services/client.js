import axios from 'axios'
import { baseURL } from '../constants/url'

const client = axios.create({
    baseURL
})

client.interceptors.request.use((config) => {
    return config
})

export default client