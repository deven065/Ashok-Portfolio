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
    <header className="fixed top-0 left-0 right-0 glass-nav z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-br from-[#3B82F6] to-[#1E3A8A] text-white font-bold text-xs sm:text-sm rounded-xl px-3 py-2 shadow-lg group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300">
                DA
            </div>
            <span className="font-bold text-base sm:text-lg text-[#E2E8F0] hidden xs:block group-hover:text-[#3B82F6] transition-colors duration-300">Data Analytics</span>
            <span className="font-bold text-base sm:text-lg text-[#E2E8F0] block xs:hidden group-hover:text-[#3B82F6] transition-colors duration-300">DA</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-4 lg:space-x-6">
            {navItems.map((item) => (
                <Link
                key={item.name}
                href={item.href}
                className={`text-xs lg:text-sm font-medium transition-all duration-300 text-[#94A3B8] hover:text-[#3B82F6] hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] relative group`}
                >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#3B82F6] to-[#FACC15] transition-all duration-300 group-hover:w-full"></span>
                </Link>
            ))}
            </nav>

            {/* CTA Button */}
            <Link
            href="#contact"
            className="hidden md:inline-block btn-premium text-white text-xs lg:text-sm font-semibold px-4 lg:px-6 py-2.5 rounded-xl shadow-premium hover:shadow-premium-hover transition-all duration-300"
            >
            Get in Touch
            </Link>

            {/* Mobile Menu Toggle */}
            <button
            className="md:hidden p-2 text-[#E2E8F0] hover:text-[#3B82F6] transition-colors duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
            >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
        </div>

        {/* Mobile Nav */}
        <div className={`md:hidden glass-surface border-t border-[#3B82F6]/20 overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="px-4 sm:px-6 py-4 space-y-4">
            {navItems.map((item, index) => (
                <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`block text-base font-medium text-[#E2E8F0] hover:text-[#3B82F6] hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] transition-all duration-300 transform ${menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}
                style={{ transitionDelay: `${index * 50}ms` }}
                >
                {item.name}
                </Link>
            ))}
            <Link
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className={`block btn-premium text-white text-center text-sm font-semibold px-4 py-3 rounded-xl shadow-premium transition-all duration-500 transform ${menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}
                style={{ transitionDelay: `${navItems.length * 50}ms` }}
            >
                Get in Touch
            </Link>
            </div>
        </div>
        </header>
    );
}
