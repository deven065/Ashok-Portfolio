"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
    <header className="fixed top-0 left-0 right-0 bg-[#f8fafc]/80 backdrop-blur-md border-b border-gray-200/70 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
            <div className="bg-linear-to-r from-yellow-400 to-blue-600 text-white font-semibold text-xs sm:text-sm rounded-md px-2 py-1">
                DA
            </div>
            <span className="font-semibold text-base sm:text-lg text-gray-900 hidden xs:block">Data Analytics</span>
            <span className="font-semibold text-base sm:text-lg text-gray-900 block xs:hidden">DA</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-4 lg:space-x-6">
            {navItems.map((item) => (
                <Link
                key={item.name}
                href={item.href}
                className={`text-xs lg:text-sm font-medium transition text-gray-700 hover:text-gray-900`}
                >
                {item.name}
                </Link>
            ))}
            </nav>

            {/* CTA Button */}
            <Link
            href="#contact"
            className="hidden md:inline-block btn-primary-gradient btn-animated text-white text-xs lg:text-sm font-semibold px-3 lg:px-4 py-2 rounded-md hover:scale-105 hover:-translate-y-0.5 shadow-md transition-all duration-300"
            >
            Get in Touch
            </Link>

            {/* Mobile Menu Toggle */}
            <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
            >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
        </div>

        {/* Mobile Nav */}
        <div className={`md:hidden bg-[#f8fafc] border-t border-gray-200 overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="px-4 sm:px-6 py-4 space-y-4">
            {navItems.map((item, index) => (
                <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`block text-base font-medium text-gray-700 hover:text-gray-900 transition-all duration-300 transform ${menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}
                style={{ transitionDelay: `${index * 50}ms` }}
                >
                {item.name}
                </Link>
            ))}
            <Link
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className={`block btn-primary-gradient btn-animated text-white text-center text-sm font-semibold px-4 py-2 rounded-md hover:scale-105 hover:-translate-y-0.5 shadow-md transition-all duration-500 transform ${menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}
                style={{ transitionDelay: `${navItems.length * 50}ms` }}
            >
                Get in Touch
            </Link>
            </div>
        </div>
        </header>
    );
}
