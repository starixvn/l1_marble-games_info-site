import AboutSection from "@/components/sections/about";
import GameShowcaseSection from "@/components/sections/game-showcase";
import HeroSection from "@/components/sections/hero";
import ServicesSection from "@/components/sections/services";
import StrengthsSection from "@/components/sections/strengths";
import { ABOUT_DATA, DEMO_LINKS, GAMES, HERO_DATA, SECTION_TITLES, SERVICES, STRENGTHS } from "@/constants";
import React from "react";

const HomePage: React.FC = () => {
    return (
        <>
            {/* Hero Section */}
            <HeroSection {...HERO_DATA} />

            {/* Strengths Section */}
            <StrengthsSection title={SECTION_TITLES.strengths.title} subtitle={SECTION_TITLES.strengths.subtitle} strengths={STRENGTHS} />

            {/* Services Section */}
            <ServicesSection title={SECTION_TITLES.services.title} subtitle={SECTION_TITLES.services.subtitle} services={SERVICES} />

            {/* Our Games Section */}
            <GameShowcaseSection
                title={SECTION_TITLES.showcase.title}
                subtitle={SECTION_TITLES.showcase.subtitle}
                games={GAMES}
                demoLinks={DEMO_LINKS}
            />

            {/* About Section */}
            <AboutSection title={SECTION_TITLES.about.title} subtitle={SECTION_TITLES.about.subtitle} about={ABOUT_DATA} />
        </>
    );
};

export default HomePage;
