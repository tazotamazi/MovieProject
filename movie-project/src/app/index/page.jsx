"use client";

import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard.";
import { searchMovies } from "../utils/api"; // Import the function to fetch movies

export default function Home() {
    const [movies, setMovies] = useState([]);

    // Fetch movies when the page loads
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                console.log("Fetching popular movies...");
                const data = await searchMovies("popular"); // Query for popular movies
                console.log("Movies Data:", data); // Log the response data
                setMovies(data.Search || []); // Update the state with the movie results
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        fetchMovies(); // Call the function to fetch the movies
    }, []); // Empty dependency array means this effect runs only once when the component mounts

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Popular Movies</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {movies.map((movie) => (
                    <MovieCard key={movie.imdbID} movie={movie} />
                ))}
            </div>
        </div>
    );
}
