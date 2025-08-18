"use client";

import Button from "@/components/ui/button";
import { HeaderProps } from "@/types";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./header.module.scss";

const Header: React.FC<HeaderProps> = ({ navLinks }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-700">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="#home" className="text-2xl font-bold text-white">
                    SABA <span className="text-blue-500">Marble</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link, index) =>
                        link.isButton ? (
                            <Button
                                key={`nav-button-${index}-${link.href}`}
                                href={link.href}
                                variant="primary"
                                size="sm"
                                className="font-semibold"
                            >
                                {link.label}
                            </Button>
                        ) : (
                            <Link
                                key={`nav-link-${index}-${link.href}`}
                                href={link.href}
                                className={`${styles.navLink} text-gray-300 hover:text-white`}
                                onClick={closeMobileMenu}
                            >
                                {link.label}
                            </Link>
                        )
                    )}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMobileMenu}
                        className="text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
                        aria-label="Toggle mobile menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                            />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isMobileMenuOpen ? styles.mobileMenuOpen : styles.mobileMenu}`}>
                {navLinks.map((link, index) => (
                    <Link
                        key={`mobile-nav-${index}-${link.href}`}
                        href={link.href}
                        className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                        onClick={closeMobileMenu}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </header>
    );
};

export default Header;
