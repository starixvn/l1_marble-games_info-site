import { AboutSection, GameShowcase, NavLink, ServiceCard, SocialLink } from "@/types";
import imgGalaxy from "@images/game-showcase/galaxy.png";
import imgOriginal from "@images/game-showcase/orginal.png";
import imgPremier from "@images/game-showcase/premier_league.png";
import { STRENGTHS_DATA } from "./strengths";

// Navigation links
export const NAV_LINKS: NavLink[] = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Our Services" },
    { href: "#showcase", label: "Products" },
    { href: "#about", label: "About Us" },
    { href: "https://www.sabaplay.com/en/contact", label: "Contact Us", isButton: true },
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
            "Our service delivers high-quality, custom-designed video simulations that create a dynamic and visually engaging experience for players. We also provide tailored content services, designing unique video experiences to match your brand and audience.",
    },
];

// Our Games data
export const GAMES: GameShowcase[] = [
    {
        image: imgOriginal,
        title: "Original Theme",
        description: "The original game design, with a colorful cartoon stadium and playful match visuals.",
        alt: "SABA Marbles Original Theme",
        link: "https://www.youtube.com/embed/6_7AdtN9xS8?si=En0zikNMT3pjKw1B",
    },
    {
        image: imgGalaxy,
        title: "Galaxy Theme",
        description: "A futuristic, cosmic design for a modern gaming experience.",
        alt: "SABA Marbles Galaxy Theme",
        link: "https://www.youtube.com/embed/aGZnm-0Yulo?si=plvMrLOZV09igrTK",
    },
    {
        image: imgPremier,
        title: "Premier League Theme",
        description: "Inspired by the English Premier League, designed for true football fans.",
        alt: "SABA Marbles Premier League Theme",
        link: "https://www.youtube.com/embed/M1bW2xtaikY?si=h-u49guHuypNyE5C",
    },
];

// Demo links
export const DEMO_LINKS = {
    sabaSports: "https://g943gp.pvm5062.net/en-US/live/9994",
    sabaPlay: "https://www.sabaplay.top/13506",
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
        "SABA Marbles, powered by SABAPLAY, is a revolutionary RNG-simulated sports game designed for fast-paced entertainment and betting. Perfect for sports lovers seeking instant action and quick wins.",
    ctaText: "Live Demo",
    ctaHref: "#showcase",
};

// Section titles and subtitles
export const SECTION_TITLES = {
    strengths: {
        title: "Why Choose SABA Marbles?",
        subtitle: "The competitive advantages that set us apart.",
    },
    services: {
        title: "Our Services",
        subtitle: "Comprehensive solutions for your iGaming platform.",
    },
    showcase: {
        title: "Our Games",
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

export const LINK_LIVE_DEMO = "https://mgtv.ap.vgaming88.net/?game=2000";
