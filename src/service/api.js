import axios from "axios";

const api = axios.create({
    baseURL: 'https://us-central1-trailerhub-95c42.cloudfunctions.net/',
    timeout: 2000,
});

export default api;