"use client";

import { ThemeProvider } from "./context";
import Navbar from "./components/Navbar.";
import Footer from "./components/Footer";
import "./styles/globals.css"; // TailwindCSS styles

export default function RootLayout({ children }) {
    return (
        <ThemeProvider>
            <html lang="en">
                <body className="flex flex-col min-h-screen">
                    {" "}
                    {/* Flex column layout and min height of screen */}
                    <Navbar />
                    <main className="flex-grow">{children}</main>{" "}
                    {/* Main content grows to take available space */}
                    <Footer />
                </body>
            </html>
        </ThemeProvider>
    );
}
