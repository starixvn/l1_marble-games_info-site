import Card from "@/components/ui/card";
import { ChatIcon, LightningIcon, StarIcon, TrendingIcon } from "@/components/ui/icons/icons";
import React from "react";
import styles from "./strengths-section.module.scss";

// Strength data type without icon
interface StrengthData {
    title: string;
    description: string;
    image?: string;
    alt?: string;
}

interface StrengthsSectionProps {
    title: string;
    subtitle: string;
    strengths: StrengthData[];
}

// Icon mapping for strengths with unique keys
const STRENGTH_ICONS = [
    <StarIcon key="strength-star-icon" />,
    <ChatIcon key="strength-chat-icon" />,
    <LightningIcon key="strength-lightning-icon" />,
    <TrendingIcon key="strength-trending-icon" />,
];

const StrengthsSection: React.FC<StrengthsSectionProps> = ({ title, subtitle, strengths }) => {
    return (
        <section id="strengths" className={`${styles.sectionPadding} py-16`}>
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className={`${styles.headingLg} text-gradient-brand-white pb-8`}>{title}</h2>
                    <p className={`${styles.textBody} text-brand mt-2`}>{subtitle}</p>
                </div>

                <div className={styles.gridStrengths}>
                    {strengths.map((strength, index) => (
                        <Card
                            key={`strength-${index}-${strength.title.toLowerCase().replace(/\s+/g, "-")}`}
                            className={`p-8 text-center hover ${styles.card}`}
                        >
                            {strength.image ? (
                                <div className={styles.imageContainer}>
                                    <img src={strength.image} alt={strength.alt || strength.title} />
                                </div>
                            ) : (
                                <div className={styles.iconContainer}>
                                    {STRENGTH_ICONS[index] || <StarIcon key="strength-default-icon" />}
                                </div>
                            )}
                            <h3 className={`${styles.headingMd} text-white mb-3`}>{strength.title}</h3>
                            <p className={`${styles.textSm} text-brand`}>{strength.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StrengthsSection;
