"use client";

import Link from "next/link";
import { useTheme } from "@/context";

export default function Navbar() {
    const { darkMode, toggleDarkMode } = useTheme(); // Access dark mode and toggle function

    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <h1 className="text-lg font-bold">MovieHub</h1>
            <div className="flex items-center gap-4">
                {/* Navigation Links */}
                <Link href="/index" className="hover:underline">
                    Home
                </Link>
                <Link href="/search" className="hover:underline">
                    Search
                </Link>
                <Link href="/login" className="hover:underline">
                    Login
                </Link>

                {/* Dark Mode Toggle */}
                <button
                    onClick={toggleDarkMode}
                    className="p-2 bg-gray-700 rounded hover:bg-gray-600"
                    aria-label="Toggle Dark Mode"
                >
                    {darkMode ? "☀️ Light" : "🌙 Dark"}
                </button>
            </div>
        </nav>
    );
}
