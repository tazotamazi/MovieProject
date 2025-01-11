import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { fetchPopularMovies } from "../utils/api";

export default function Home() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetchPopularMovies().then((data) => setMovies(data.results));
    }, []);
    return (
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
}
