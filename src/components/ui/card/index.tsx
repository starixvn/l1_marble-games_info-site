import { CardProps } from "@/types";
import React from "react";
import styles from "./card.module.scss";

const Card: React.FC<CardProps> = ({ children, className = "", hover = true }) => {
    const cardClasses = `${styles.card} ${hover ? styles.hover : ""} ${className}`;

    return <div className={cardClasses}>{children}</div>;
};

export default Card;
