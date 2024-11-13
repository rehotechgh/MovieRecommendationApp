import axios from 'axios';

const API_KEY = '4b0a1242b6517969e0716f2b60796018'; // Replace with your TMDB API key
const BASE_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=API_KEY';


const axiosInstance = axios.create({
    baseURL: BASE_URL,
    params: {
      api_key: API_KEY,
        language: 'en-US',
    },
});

export default axiosInstance;
