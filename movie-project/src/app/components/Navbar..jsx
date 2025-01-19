"use client";

import Link from "next/link";
import { useTheme } from "@/app/context";

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav
            className={`p-4 flex justify-between items-center transition-all duration-300 
            ${theme === "light" ? "bg-white text-black shadow-md" : "bg-gray-900 text-white shadow-xl"}`}
        >
            <h1 className="text-lg font-bold">MovieHub</h1>
            <div className="flex gap-4">
                <Link href="/index" className="hover:underline">
                    Home
                </Link>
                <Link href="/search" className="hover:underline">
                    Search
                </Link>
                <Link href="/login" className="hover:underline">
                    Login
                </Link>
            </div>
            <button
                onClick={toggleTheme}
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-all"
            >
                {theme === "light" ? (
                    <span role="img" aria-label="moon">
                        🌙
                    </span>
                ) : (
                    <span role="img" aria-label="sun">
                        ☀️
                    </span>
                )}
            </button>
        </nav>
    );
}
