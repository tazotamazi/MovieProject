"use client";

import { useTheme } from "../context";
import LoginForm from "../components/LoginForm.";

export default function LoginPage() {
    const { theme } = useTheme(); // Get the current theme from context

    return (
        <div
            className={`h-screen flex justify-center items-center transition-all duration-300 
            ${theme === "light" ? "bg-gray-100" : "bg-gray-900"}`}
        >
            <LoginForm />
        </div>
    );
}
