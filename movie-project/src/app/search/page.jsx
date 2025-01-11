"use client";

import { useState } from "react";
import SearchBar from "../components/SearchBar.";
import MovieCard from "../components/MovieCard.";
import { searchMovies } from "../utils/api";

export default function Search() {
    const [movies, setMovies] = useState([]); // State to store the movies

    const handleSearch = (query) => {
        if (query.trim() === "") return; // Skip empty search

        searchMovies(query).then((data) => {
            setMovies(data.Search || []); // Update the movie results (data.Search may vary based on the API response)
        });
    };

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
                {movies.map((movie) => (
                    <MovieCard key={movie.imdbID} movie={movie} />
                ))}
            </div>
        </div>
    );
}
