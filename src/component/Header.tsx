"use client";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.webp"
            alt="Logo"
            width={50}
            height={50}
            className="mr-2 rounded-lg"
          />
          <span className="text-xl font-bold hover:text-yellow-600"> My App Countdown</span>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-6 text-lg font-semibold">
          <Link
            href="/"
            className="hover:text-yellow-300 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/contact"
            className="hover:text-yellow-300 transition-colors duration-200"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
