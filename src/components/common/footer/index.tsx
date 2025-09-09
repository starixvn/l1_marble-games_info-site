import { FooterProps } from "@/types";
import React from "react";
import styles from "./footer.module.scss";

const Footer: React.FC<FooterProps> = ({ copyright }) => {
    return (
        <footer className={`${styles.footer} border-t border-gray-700`}>
            <div className="container mx-auto px-6 h-16 flex items-center justify-center text-center text-brand">
                <p className={`text-sm`}>{copyright}</p>
            </div>
        </footer>
    );
};

export default Footer;
