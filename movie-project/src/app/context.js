"use client";

import { createContext, useContext, useState, useEffect } from "react";

// Create context for theme management
const ThemeContext = createContext();

// Custom hook to access theme context
export const useTheme = () => useContext(ThemeContext);

// ThemeProvider component to provide theme context
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    // Set theme on initial load (either from localStorage or default to light)
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.setAttribute("data-theme", savedTheme);
        } else {
            setTheme("light");
            document.documentElement.setAttribute("data-theme", "light");
        }
    }, []);

    // Toggle between light and dark theme
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
