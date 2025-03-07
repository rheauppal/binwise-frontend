import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="w-full p-4 bg-blue-600 text-white flex justify-center space-x-8 shadow-md">
            <Link href="/" className="text-lg font-semibold hover:text-gray-200 transition">🏠 Home</Link>
            <Link href="/scanner" className="text-lg font-semibold hover:text-gray-200 transition">📷 Scanner</Link>
            <Link href="/about" className="text-lg font-semibold hover:text-gray-200 transition">ℹ️ About</Link>
        </nav>
    );
};

export default Navbar;
