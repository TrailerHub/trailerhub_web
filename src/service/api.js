import axios from "axios";

const prodUrl = 'https://us-central1-share-d5fd6.cloudfunctions.net/';
const devUrl = 'https://us-central1-trailerhub-95c42.cloudfunctions.net/';
const api = axios.create({
    baseURL: prodUrl,
    timeout: 5000,
});

export default api;