import React from "react";
import styles from "./card.module.scss";
import { CardProps } from "./types";

const Card: React.FC<CardProps> = ({ children, className = "", hover = true, onClick }) => {
    const cardClasses = `${styles.card} ${hover ? styles.hover : ""} ${className}`;

    return (
        <div className={cardClasses} onClick={onClick} role={onClick ? "button" : undefined} tabIndex={onClick ? 0 : undefined}>
            {children}
        </div>
    );
};

export default Card;
