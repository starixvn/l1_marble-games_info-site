import AboutSection from "@/components/sections/about";
import ContactSection from "@/components/sections/contact";
import GameShowcaseSection from "@/components/sections/game-showcase";
import HeroSection from "@/components/sections/hero";
import ServicesSection from "@/components/sections/services";
import StrengthsSection from "@/components/sections/strengths";
import { ABOUT_DATA, DEMO_LINKS, GAMES, HERO_DATA, SECTION_TITLES, SERVICES, STRENGTHS } from "@/constants";
import type { ContactForm } from "@/types";
import React from "react";

const HomePage: React.FC = () => {
    const handleContactSubmit = (data: ContactForm) => {
        console.log("Contact form submitted:", data);
        alert("Thank you for your message! We will get back to you soon.");
    };

    return (
        <>
            {/* Hero Section */}
            <HeroSection {...HERO_DATA} />

            {/* Strengths Section */}
            <StrengthsSection title={SECTION_TITLES.strengths.title} subtitle={SECTION_TITLES.strengths.subtitle} strengths={STRENGTHS} />

            {/* Services Section */}
            <ServicesSection title={SECTION_TITLES.services.title} subtitle={SECTION_TITLES.services.subtitle} services={SERVICES} />

            {/* Game Showcase Section */}
            <GameShowcaseSection
                title={SECTION_TITLES.showcase.title}
                subtitle={SECTION_TITLES.showcase.subtitle}
                games={GAMES}
                demoLinks={DEMO_LINKS}
            />

            {/* About Section */}
            <AboutSection title={SECTION_TITLES.about.title} subtitle={SECTION_TITLES.about.subtitle} about={ABOUT_DATA} />

            {/* Contact Section */}
            <ContactSection
                title={SECTION_TITLES.contact.title}
                subtitle={SECTION_TITLES.contact.subtitle}
                onSubmit={handleContactSubmit}
            />
        </>
    );
};

export default HomePage;
