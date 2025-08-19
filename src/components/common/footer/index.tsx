import { FooterProps } from "@/types";
import React from "react";

const Footer: React.FC<FooterProps> = ({ socialLinks, copyright }) => {
    return (
        <footer className={`bg-gray-900 border-t border-gray-700`}>
            <div className="container mx-auto px-6 py-8 text-center text-gray-400">
                {/* Social Media Links */}
                <div className={`flex justify-center space-x-6 mb-4`}>
                    {socialLinks.map((link, index) => (
                        <a
                            key={`social-${index}-${link.label.toLowerCase()}`}
                            href={link.href}
                            className={`hover:text-white transition-colors duration-300`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Copyright */}
                <p className={`text-sm`}>{copyright}</p>
            </div>
        </footer>
    );
};

export default Footer;
