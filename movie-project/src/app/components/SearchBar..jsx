import { useState } from "react";

export default function SearchBar({ onSearch }) {
    const [query, setQuery] = useState(""); // Store the query input from the user

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        onSearch(query); // Call the onSearch function passed from the parent
        setQuery(""); // Clear the input after submitting
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 p-4">
            <input
                type="text"
                placeholder="Search for movies..."
                className="border rounded p-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={query}
                onChange={(e) => setQuery(e.target.value)} // Update query on input change
            />
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
                Search
            </button>
        </form>
    );
}
