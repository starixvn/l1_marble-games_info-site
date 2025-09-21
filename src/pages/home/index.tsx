import GameDemoSection from "@/components/sections/game-demo";
import StrengthsSection from "@/components/sections/strengths";
import { DEMO_LINKS, SECTION_TITLES, STRENGTHS } from "@/constants";
import React, { Suspense } from "react";

// Import microfrontends
const HeroSection = React.lazy(() => import("hero/HeroSection"));
const AboutSection = React.lazy(() => import("about/AboutSection"));
const ServicesSection = React.lazy(() => import("services/ServicesSection"));
const GameShowcaseSection = React.lazy(() => import("gameShowcase/GameShowcaseSection"));

// Constants for microfrontends
const HERO_DATA = {
    title: "Experience the Thrill of RNG Marble Games",
    description:
        "SABA Marbles, powered by SABAPLAY, is a revolutionary RNG-simulated sports game designed for fast-paced entertainment and betting. Perfect for sports lovers seeking instant action and quick wins.",
};

const ABOUT_DATA = {
    title: "About SABA Marbles",
    subtitle: "The innovative iGaming developer behind Marble.",
    items: [
        {
            title: "Our Mission",
            description:
                "To deliver thrilling and fair iGaming experiences by blending innovative technology with a passion for sports entertainment.",
        },
        {
            title: "Our Vision",
            description:
                "To become a leading global provider of RNG-based sports games, recognized for our creativity, reliability, and player-centric approach.",
        },
        {
            title: "Core Values",
            description:
                "Innovation, Integrity, and Entertainment. These principles guide every game we create and every partnership we build.",
        },
    ],
};

const SERVICES = [
    {
        title: "Extensive Odds Feed",
        description:
            "We provide a diverse range of betting markets to keep your players engaged. Our feed is fast, reliable, and covers all aspects of the game.",
        features: [
            "Handicap",
            "Over/Under",
            "Odd/Even",
            "1X2",
            "Home Team O/U",
            "Away Team O/U",
            "1H Handicap",
            "1H Over/Under",
            "1H Odd/Even",
            "1H 1X2",
            "1H Home Team O/U",
            "1H Away Team O/U",
        ],
    },
    {
        title: "Exclusive Game Content Creation",
        description:
            "Our service delivers high-quality, custom-designed video simulations that create a dynamic and visually engaging experience for players. We also provide tailored content services, designing unique video experiences to match your brand and audience.",
    },
];

const GAMES = [
    {
        image: "/src/assets/images/game-showcase/orginal.png",
        title: "Original Theme",
        description: "The original game design, with a colorful cartoon stadium and playful match visuals.",
        alt: "SABA Marbles Original Theme",
        link: "https://www.youtube.com/embed/6_7AdtN9xS8?si=En0zikNMT3pjKw1B",
    },
    {
        image: "/src/assets/images/game-showcase/galaxy.png",
        title: "Galaxy Theme",
        description: "A futuristic, cosmic design for a modern gaming experience.",
        alt: "SABA Marbles Galaxy Theme",
        link: "https://www.youtube.com/embed/aGZnm-0Yulo?si=plvMrLOZV09igrTK",
    },
    {
        image: "/src/assets/images/game-showcase/premier_league.png",
        title: "Premier League Theme",
        description: "Inspired by the English Premier League, designed for true football fans.",
        alt: "SABA Marbles Premier League Theme",
        link: "https://www.youtube.com/embed/M1bW2xtaikY?si=h-u49guHuypNyE5C",
    },
];

const HomePage: React.FC = () => {
    return (
        <>
            <Suspense fallback={<div className="text-white p-6 text-center">Loading Hero...</div>}>
                <HeroSection {...HERO_DATA} />
            </Suspense>

            <StrengthsSection title={SECTION_TITLES.strengths.title} subtitle={SECTION_TITLES.strengths.subtitle} strengths={STRENGTHS} />

            <Suspense fallback={<div className="text-white p-6 text-center">Loading Services...</div>}>
                <ServicesSection title={SECTION_TITLES.services.title} subtitle={SECTION_TITLES.services.subtitle} services={SERVICES} />
            </Suspense>

            <Suspense fallback={<div className="text-white p-6 text-center">Loading Game Showcase...</div>}>
                <GameShowcaseSection
                    title={SECTION_TITLES.showcase.title}
                    subtitle={SECTION_TITLES.showcase.subtitle}
                    games={GAMES}
                    demoLinks={DEMO_LINKS}
                />
            </Suspense>

            <GameDemoSection demoLinks={DEMO_LINKS} />

            <Suspense fallback={<div className="text-white p-6 text-center">Loading About...</div>}>
                <AboutSection title={SECTION_TITLES.about.title} subtitle={SECTION_TITLES.about.subtitle} about={ABOUT_DATA} />
            </Suspense>
        </>
    );
};

export default HomePage;
