// /pages/login.jsx
"use client";

import { useState } from "react";
import { loginUser } from "../utils/auth"; // Import Firebase login function

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        await loginUser(email, password);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form
                onSubmit={handleLogin}
                className="p-6 bg-white rounded-lg shadow-lg"
            >
                <h1 className="text-xl font-bold mb-4">Login</h1>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-2 w-full mb-4"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border p-2 w-full mb-4"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 w-full"
                >
                    Login
                </button>
            </form>
        </div>
    );
}
