"use client";

import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard.";
import { searchMovies } from "../utils/api";
import MovieCarousel from "../components/MovieCarousel";
import Spinner from "../components/spiner";

export default function Home() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // State to track loading

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                console.log("Fetching popular movies...");
                const data = await searchMovies("popular");
                console.log("Movies Data:", data);
                setMovies(data.Search || []);
            } catch (error) {
                console.error("Error fetching movies:", error);
            } finally {
                setIsLoading(false); // Stop loading
            }
        };

        fetchMovies();
    }, []);

    return (
        <div className="p-4">
            {/* Show Spinner while Loading */}
            {isLoading ? (
                <Spinner />
            ) : (
                <>
                    {/* Movie Carousel Section */}
                    <MovieCarousel movies={movies} />

                    {/* Movie Grid Section */}
                    <h1 className="text-2xl font-bold mb-4 text-center">
                        Popular Movies
                    </h1>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {movies.map((movie) => (
                            <MovieCard key={movie.imdbID} movie={movie} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
