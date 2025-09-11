import AboutSection from "@/components/sections/about";
import GameDemoSection from "@/components/sections/game-demo";
import GameShowcaseSection from "@/components/sections/game-showcase";
import HeroSection from "@/components/sections/hero";
import ServicesSection from "@/components/sections/services";
import StrengthsSection from "@/components/sections/strengths";
import { ABOUT_DATA, DEMO_LINKS, GAMES, HERO_DATA, SECTION_TITLES, SERVICES, STRENGTHS } from "@/constants";
import React from "react";

const HomePage: React.FC = () => {
    return (
        <>
            <HeroSection {...HERO_DATA} />

            <StrengthsSection title={SECTION_TITLES.strengths.title} subtitle={SECTION_TITLES.strengths.subtitle} strengths={STRENGTHS} />

            <ServicesSection title={SECTION_TITLES.services.title} subtitle={SECTION_TITLES.services.subtitle} services={SERVICES} />

            <GameShowcaseSection
                title={SECTION_TITLES.showcase.title}
                subtitle={SECTION_TITLES.showcase.subtitle}
                games={GAMES}
                demoLinks={DEMO_LINKS}
            />

            <GameDemoSection demoLinks={DEMO_LINKS} />

            <AboutSection title={SECTION_TITLES.about.title} subtitle={SECTION_TITLES.about.subtitle} about={ABOUT_DATA} />
        </>
    );
};

export default HomePage;
