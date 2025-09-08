import { StrengthCard } from "@/types";

export const STRENGTHS_DATA: Omit<StrengthCard, "icon">[] = [
    {
        title: "Exclusive Design",
        description:
            "Our games feature unique, visually stunning designs and dynamic gameplay elements, creating an immersive and engaging sports experience unlike any other.",
        image: "/images/strengths/icon_design.png",
        alt: "Exclusive Design",
    },
    {
        title: "Seamless Integration, One-Time Setup",
        description:
            "Integrate all our games effortlessly with a single setup. A one-time integration gives you instant access to our entire gaming portfolio.",
        image: "/images/strengths/icon_setup.png",
        alt: "Seamless Integration, One-Time Setup",
    },
    {
        title: "SABA Sports & SABA Play Integrated",
        description:
            "Our product is now fully integrated with SABA SPORTS and SABAPLAY — two leading game providers — delivering trusted performance, wider reach, and a seamless experience.",
        image: "/images/strengths/icon_integrated.png",
        alt: "SABA Sports & SABA Play Integrated",
    },
    {
        title: "Proven Success & Growth",
        description:
            "Trusted by 80,000 players and generating 640,000 monthly tickets from Jan 2025. Backed by real results — high player engagement and strong daily & monthly ticket volume.",
        image: "/images/strengths/icon_growth.png",
        alt: "Proven Success & Growth",
    },
];
