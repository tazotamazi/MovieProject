"use client";

// /pages/search.jsx

import { useState } from "react";
import SearchBar from "../components/SearchBar.";
import MovieCard from "../components/MovieCard.";
import { searchMovies } from "../utils/api";

export default function Search() {
    const [movies, setMovies] = useState([]);

    const handleSearch = (query) => {
        if (query.trim() === "") return;

        searchMovies(query)
            .then((data) => setMovies(data.Search || [])) // Ensure we are accessing the correct property
            .catch((error) => console.error("Error fetching data:", error));
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
