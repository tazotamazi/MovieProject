import Link from "next/link"; // Make sure the import is at the top

export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
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
        </nav>
    );
}
