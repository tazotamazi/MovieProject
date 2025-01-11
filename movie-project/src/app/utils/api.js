import axios from "axios";

export const searchMovies = async (query) => {
    try {
        // Log the query to check if it's correct
        console.log("Searching for:", query);

        // Make the API call
        const res = await axios.get("http://www.omdbapi.com/", {
            params: {
                s: query, // Search query (e.g., "Inception")
                apikey: process.env.NEXT_PUBLIC_OMDB_API_KEY,
            },
        });

        // Log the API response
        console.log("API Response:", res.data);

        // Return the data
        return res.data;
    } catch (error) {
        console.error("Error fetching movies:", error);
        throw error;
    }
};
