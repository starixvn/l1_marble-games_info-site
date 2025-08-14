import { ButtonProps } from "@/types";
import React from "react";
import styles from "./button.module.scss";

const Button: React.FC<ButtonProps> = ({ children, variant = "primary", size = "md", href, onClick, className = "", type = "button" }) => {
    const baseClasses = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus-ring";

    const variantClasses = {
        primary: styles.btnPrimary,
        secondary: "bg-gray-700 text-white hover:bg-gray-600 hover:shadow-lg",
    };

    const sizeClasses = {
        sm: "py-2 px-4 text-sm",
        md: "py-3 px-6 text-base",
        lg: styles.btnPrimaryLg,
    };

    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    if (href) {
        return (
            <a href={href} className={classes}>
                {children}
            </a>
        );
    }

    return (
        <button type={type} className={classes} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
