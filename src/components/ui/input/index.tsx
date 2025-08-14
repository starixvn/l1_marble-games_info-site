import { InputProps } from "@/types";
import React from "react";
import styles from "./input.module.scss";

const Input: React.FC<InputProps> = ({ type, name, placeholder, required = false, className = "", rows = 3, value = "", onChange }) => {
    if (type === "textarea") {
        return (
            <textarea
                name={name}
                rows={rows}
                placeholder={placeholder}
                required={required}
                value={value}
                onChange={onChange}
                className={`${styles.formTextarea} ${className}`}
            />
        );
    }

    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            required={required}
            value={value}
            onChange={onChange}
            className={`${styles.formInput} ${className}`}
        />
    );
};

export default Input;
