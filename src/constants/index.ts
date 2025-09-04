import { AboutSection, GameShowcase, NavLink, ServiceCard, SocialLink } from "@/types";
import { STRENGTHS_DATA } from "./strengths";

// Navigation links
export const NAV_LINKS: NavLink[] = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Our Services" },
    { href: "#showcase", label: "Products" },
    { href: "#about", label: "About Us" },
    { href: "#contact", label: "Contact Us", isButton: true },
];

// Export strengths data
export { STRENGTHS_DATA as STRENGTHS };

// Services data
export const SERVICES: ServiceCard[] = [
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
            "Our service includes exclusively designed, high-quality video simulations of the matches. This provides a dynamic and visually appealing experience for players, far beyond simple score tickers. We also offer custom design services, creating tailored video content to match your brand and audience.",
    },
];

// Game showcase data
export const GAMES: GameShowcase[] = [
    {
        image: "/images/game-showcase/orginal.png",
        title: "Original Theme",
        description: "The original game design, with a colorful cartoon stadium and playful match visuals.",
        alt: "SABA Marble Original Theme",
    },
    {
        image: "/images/game-showcase/galaxy.png",
        title: "Galaxy Theme",
        description: "A futuristic, cosmic design for a modern gaming experience.",
        alt: "SABA Marble Galaxy Theme",
    },
    {
        image: "/images/game-showcase/premier_league.png",
        title: "Premier League Theme",
        description: "Inspired by the English Premier League, designed for true football fans.",
        alt: "SABA Marble Premier League Theme",
    },
];

// Demo links
export const DEMO_LINKS = {
    sabaSports: "#saba-sports-demo",
    sabaPlay: "#saba-play-demo",
};

// About section data
export const ABOUT_DATA: AboutSection = {
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

// Social links
export const SOCIAL_LINKS: SocialLink[] = [
    { href: "#facebook", label: "Facebook" },
    { href: "#twitter", label: "Twitter" },
    { href: "#linkedin", label: "LinkedIn" },
];

// Copyright text
export const COPYRIGHT_TEXT = "© 2025 SABA Marbles. All Rights Reserved.";

// Hero section data
export const HERO_DATA = {
    title: "Experience the Thrill of RNG Marble Games",
    description:
        "SABA Marble is a revolutionary RNG-simulated sports game designed for fast-paced entertainment and betting. Perfect for sports lovers seeking instant action and quick wins.",
    ctaText: "Live Demo",
    ctaHref: "#showcase",
};

// Section titles and subtitles
export const SECTION_TITLES = {
    strengths: {
        title: "Why Choose SABA Marble?",
        subtitle: "The competitive advantages that set us apart.",
    },
    services: {
        title: "Our Services",
        subtitle: "Comprehensive solutions for your iGaming platform.",
    },
    showcase: {
        title: "Game Showcase",
        subtitle: "Functionally identical, aesthetically unique. Choose your style.",
    },
    about: {
        title: "About SABA Marbles",
        subtitle: "The innovative iGaming developer behind Marble.",
    },
    contact: {
        title: "Get In Touch",
        subtitle: "Have a question or want to discuss a partnership? Contact us.",
    },
};
