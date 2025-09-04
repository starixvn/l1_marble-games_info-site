import { StrengthCard } from "@/types";

export const STRENGTHS_DATA: Omit<StrengthCard, "icon">[] = [
    {
        title: "Exclusive Design",
        description:
            "Our games feature unique, visually stunning designs and dynamic spinner players, creating an immersive and engaging sports experience unlike any other.",
        image: "/images/strengths/icon_design.png",
        alt: "Exclusive Design",
    },
    {
        title: "Seamlessly integrated via ONE API",
        description:
            "Integrate all our games effortlessly with a single, powerful ONE API. A one-time setup gives you access to our entire gaming portfolio.",
        image: "/images/strengths/icon_setup.png",
        alt: "Seamlessly integrated via ONE API",
    },
    {
        title: "SABA Sports & SABA Play Integrated",
        description:
            "SABA Sports and Vgaming are now fully integrated—delivering trusted performance, a wider reach, and a seamless gaming experience.",
        image: "/images/strengths/icon_integrated.png",
        alt: "SABA Sports & SABA Play Integrated",
    },
    {
        title: "Proven Success & Growth",
        description:
            "Trusted by [number] of players, generating [number] of tickets daily and monthly. Backed by real results — high player engagement and strong ticket volume. Consistent growth with active players every day.",
        image: "/images/strengths/icon_growth.png",
        alt: "Proven Success & Growth",
    },
];
