import axios from "axios";
export const API_KEY = process.env.REACT_APP_GIPHY_API_KEY || "#YOUR_GHYPHY_API_HERE_OR_IN_ENV_FILE#"

const apiService = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL ||"https://api.giphy.com/v1/gifs/"
});

export default apiService;