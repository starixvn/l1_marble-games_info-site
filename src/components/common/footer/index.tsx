import { FooterProps } from "@/types";
import React from "react";
import styles from "./footer.module.scss";

const Footer: React.FC<FooterProps> = ({ socialLinks, copyright }) => {
    return (
        <footer className={`${styles.footer} bg-gray-900 border-t border-gray-700`}>
            <div className="container mx-auto px-6 py-8 text-center text-gray-400">
                {/* Social Media Links */}
                <div className={`${styles.socialLinks} flex justify-center space-x-6 mb-4`}>
                    {socialLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`${styles.socialLink} hover:text-white transition-colors duration-300`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Copyright */}
                <p className={`${styles.copyright} text-sm`}>{copyright}</p>
            </div>
        </footer>
    );
};

export default Footer;
