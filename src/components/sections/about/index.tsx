import { AboutSectionProps } from "@/types";
import React from "react";
import styles from "./about-section.module.scss";

const AboutSection: React.FC<AboutSectionProps> = ({ title, subtitle, about }) => {
    return (
        <section id="about" className={styles.sectionPadding}>
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className={`${styles.headingLg} text-white mb-2`}>{title}</h2>
                    <p className="text-gray-400 mt-2">{subtitle}</p>
                </div>

                <div className={`max-w-4xl mx-auto ${styles.gridAbout}`}>
                    {about.items.map((item, index) => (
                        <div key={`about-item-${index}-${item.title.toLowerCase().replace(/\s+/g, "-")}`}>
                            <h3 className={`${styles.headingMd} text-blue-400 mb-2`}>{item.title}</h3>
                            <p className="text-gray-400">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
