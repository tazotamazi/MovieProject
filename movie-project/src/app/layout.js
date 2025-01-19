"use client";

import "./styles/globals.css";
import Navbar from "./components/Navbar.";
import Footer from "./components/Footer";
import { ThemeProvider } from "@/context";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="flex flex-col min-h-screen">
                <ThemeProvider>
                    <Navbar />
                    <main className="flex-grow">{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
