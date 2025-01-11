// /components/MovieCard.jsx
export default function MovieCard({ movie }) {
    return (
        <div className="border p-4 rounded">
            <img
                src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"} // Use placeholder image if no poster
                alt={movie.Title}
                className="w-full h-64 object-cover mb-2"
            />
            <h3 className="text-lg font-bold">{movie.Title}</h3>
            <p>{movie.Year}</p>
        </div>
    );
}
