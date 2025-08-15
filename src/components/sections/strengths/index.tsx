import Card from "@/components/ui/card";
import { ChatIcon, LightningIcon, StarIcon, TrendingIcon } from "@/components/ui/icons";
import React from "react";

// Strength data type without icon
interface StrengthData {
    title: string;
    description: string;
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
        <section id="strengths" className="section-padding bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="heading-lg text-white mb-2">{title}</h2>
                    <p className="text-gray-400 mt-2">{subtitle}</p>
                </div>

                <div className="grid-strengths">
                    {strengths.map((strength, index) => (
                        <Card
                            key={`strength-${index}-${strength.title.toLowerCase().replace(/\s+/g, "-")}`}
                            className="p-8 text-center hover"
                        >
                            <div className="icon-container">{STRENGTH_ICONS[index] || <StarIcon key="strength-default-icon" />}</div>
                            <h3 className="heading-md text-white mb-2">{strength.title}</h3>
                            <p className="text-gray-400">{strength.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StrengthsSection;
