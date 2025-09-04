import { AboutSectionProps } from "@/types";
import React from "react";
import styles from "./about-section.module.scss";

const AboutSection: React.FC<AboutSectionProps> = ({ title, subtitle, about }) => {
    return (
        <section id="about" className={styles.sectionPadding}>
            <div className="container mx-auto px-6">
                <div className={`${styles.panel} max-w-5xl mx-auto`}>
                    <div className="text-center mb-10">
                        <h2 className={`${styles.headingLg} text-red-500 mb-2`}>{title}</h2>
                        <p className="text-gray-300 mt-2">{subtitle}</p>
                    </div>

                    <div className={`max-w-4xl mx-auto ${styles.gridAbout}`}>
                        {about.items.map((item, index) => (
                            <div key={`about-item-${index}-${item.title.toLowerCase().replace(/\s+/g, "-")}`}>
                                <h3 className={`${styles.headingMd} text-white mb-2`}>{item.title}</h3>
                                <p className="text-gray-400 text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
