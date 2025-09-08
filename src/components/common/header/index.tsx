import Button from "@/components/ui/button";
import { HeaderProps } from "@/types";
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
        <header className="bg-[#303030] backdrop-blur-sm sticky top-0 z-50 border-b border-gray-700">
            <nav className="container mx-auto px-6 py-1 flex justify-between items-center">
                <a href="#home" className="inline-flex items-center" aria-label="SABA Marbles home">
                    <img src="/images/logo.png" alt="SABA Marbles" className="h-auto w-auto" />
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8 text-base">
                    {navLinks.map((link, index) =>
                        link.isButton ? (
                            <Button
                                key={`nav-button-${index}-${link.href}`}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="primary"
                                size="sm"
                                className="font-semibold"
                            >
                                {link.label}
                            </Button>
                        ) : (
                            <a
                                key={`nav-link-${index}-${link.href}`}
                                href={link.href}
                                className={`${styles.navLink} text-brand hover:text-white text-base`}
                                onClick={closeMobileMenu}
                            >
                                {link.label}
                            </a>
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
            <div className={`md:hidden space-y-8 ${isMobileMenuOpen ? styles.mobileMenuOpen : styles.mobileMenu}`}>
                {navLinks.map((link, index) => (
                    <a
                        key={`mobile-nav-${index}-${link.href}`}
                        href={link.href}
                        className="block py-2 px-4 text-base text-brand hover:bg-gray-700 hover:text-white transition-colors"
                        onClick={closeMobileMenu}
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        </header>
    );
};

export default Header;
