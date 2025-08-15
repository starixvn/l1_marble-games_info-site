import Button from "@/components/ui/button";
import { HeroSectionProps } from "@/types";
import React from "react";
import styles from "./hero-section.module.scss";

const HeroSection: React.FC<HeroSectionProps> = ({ title, description, ctaText, ctaHref }) => {
    return (
        <section id="home" className={`${styles.heroSection} text-white text-center py-20 md:py-32`}>
            <div className="container mx-auto px-6">
                <h1 className="heading-xl mb-4 animate-fade-in-up">{title}</h1>
                <p className="text-body text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                    {description}
                </p>
                <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                    <Button href={ctaHref} variant="primary" size="lg" className="font-bold rounded-full">
                        {ctaText}
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
