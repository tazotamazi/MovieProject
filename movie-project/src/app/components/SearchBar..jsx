import { useState } from "react";

export default function SearchBar({ onSearch }) {
    const [query, setQuery] = useState("");
    return (
        <div className="flex gap-2 p-4">
            <input
                type="text"
                placeholder="Search for movies..."
                className="border rounded p-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button
                onClick={() => onSearch(query)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
                Search
            </button>
        </div>
    );
}
