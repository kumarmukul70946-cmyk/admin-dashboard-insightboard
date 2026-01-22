import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://fakestoreapi.com', // Example base URL
    timeout: 5000,
});

// Add interactors if needed
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        // Handle global errors here
        return Promise.reject(error);
    }
);

export default axiosInstance;
