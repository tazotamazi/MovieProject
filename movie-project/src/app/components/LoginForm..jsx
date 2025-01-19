"use client";

import { useState } from "react";
import { loginUser } from "../utils/auth"; // Ensure this path is correct
import { useTheme } from "../context";

export default function LoginForm() {
    const { theme } = useTheme(); // Access the current theme
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const data = await loginUser(email, password);

            // Save JWT token to localStorage (or a cookie)
            localStorage.setItem("token", data.token);
            console.log("Login successful, token:", data.token);

            // Redirect to home page or a dashboard
            window.location.href = "/index";
        } catch (err) {
            setError(err.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleLogin}
            className={`p-6 rounded-lg shadow-lg transition-all duration-300
            ${theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"}`}
        >
            <h1 className="text-xl font-bold mb-4">Login</h1>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`border p-2 w-full mb-4 
                ${theme === "light" ? "bg-white" : "bg-gray-700"}`}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`border p-2 w-full mb-4 
                ${theme === "light" ? "bg-white" : "bg-gray-700"}`}
            />
            <button
                type="submit"
                disabled={loading}
                className={`p-2 w-full ${loading ? "bg-gray-300" : "bg-blue-500 text-white"}`}
            >
                {loading ? "Logging in..." : "Login"}
            </button>
        </form>
    );
}
