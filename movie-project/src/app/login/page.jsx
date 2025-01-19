"use client";

import { useTheme } from "@/context";
import LoginForm from "../components/LoginForm.";

export default function LoginPage() {
    const { darkMode } = useTheme(); // Access darkMode from the ThemeContext

    return (
        <div
            className={`h-screen flex justify-center items-center ${
                darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
            }`}
        >
            <LoginForm />
        </div>
    );
}
