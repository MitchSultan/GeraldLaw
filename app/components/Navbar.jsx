'use client';
import React, { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md fixed w-full z-20 top-0 left-0">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
                {/* Logo */}
                <div className="flex items-center">
                    <span className="text-2xl font-bold text-blue-600">Gerald</span>
                </div>
                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition">Home</a>
                    <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition">About</a>
                    <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition">Services</a>
                    <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition">Contact</a>
                </div>
                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setOpen(!open)}
                        className="text-gray-700 hover:text-blue-600 focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        {open ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-white shadow-md">
                    <div className="px-4 pt-2 pb-4 space-y-2">
                        <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium transition">Home</a>
                        <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium transition">About</a>
                        <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium transition">Services</a>
                        <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium transition">Contact</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;