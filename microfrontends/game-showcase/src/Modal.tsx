import React, { useEffect } from "react";
import styles from "./modal.module.scss";
import { ModalProps } from "./types";

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        if (!isOpen) {
            return () => {};
        }

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };
        window.addEventListener("keydown", onKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) {
        return null;
    }

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.contentWrapper} onClick={(e) => e.stopPropagation()}>
                <button type="button" aria-label="Close modal" title="Close" className={styles.closeButton} onClick={onClose} />
                <div className={styles.content}>{children}</div>
            </div>
        </div>
    );
};

export default Modal;
