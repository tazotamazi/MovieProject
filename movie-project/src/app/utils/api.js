// /utils/api.js
import axios from "axios";

const API_KEY = "your_api_key"; // Replace with your actual API key (e.g., from OMDB)

export const searchMovies = async (query) => {
    try {
        const response = await axios.get(
            `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
        );
        return response.data; // Ensure that response contains 'results' or the data structure you expect
    } catch (error) {
        console.error("Error fetching movie data:", error);
        return { results: [] }; // Return empty results in case of error
    }
};
