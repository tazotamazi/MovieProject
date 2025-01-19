"use client";

import { createContext, useContext, useState, useEffect } from "react";

// Create a Context for theme
const ThemeContext = createContext();

// Custom hook to use the ThemeContext
export function useTheme() {
    return useContext(ThemeContext);
}

// ThemeProvider to wrap the app and provide theme state
export function ThemeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false);

    // Toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev);
    };

    // Save dark mode preference in localStorage
    useEffect(() => {
        const storedPreference = localStorage.getItem("darkMode") === "true";
        setDarkMode(storedPreference);
    }, []);

    useEffect(() => {
        localStorage.setItem("darkMode", darkMode);
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
}
