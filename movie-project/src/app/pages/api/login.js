// pages/api/login.js

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { email, password } = req.body;

    // Mock authentication logic (replace with real logic)
    if (email === "user@example.com" && password === "password123") {
        return res.status(200).json({ token: "mock-jwt-token" });
    }

    res.status(401).json({ message: "Invalid email or password" });
}
