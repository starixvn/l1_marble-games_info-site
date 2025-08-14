"use client";

import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import AboutSection from "@/components/sections/about-section";
import ContactSection from "@/components/sections/contact-section";
import GameShowcaseSection from "@/components/sections/game-showcase-section";
import HeroSection from "@/components/sections/hero-section";
import ServicesSection from "@/components/sections/services-section";
import StrengthsSection from "@/components/sections/strengths-section";
import {
    ABOUT_DATA,
    COPYRIGHT_TEXT,
    DEMO_LINKS,
    GAMES,
    HERO_DATA,
    NAV_LINKS,
    SECTION_TITLES,
    SERVICES,
    SOCIAL_LINKS,
    STRENGTHS,
} from "@/constants";
import { ContactForm } from "@/types";

export default function Home() {
    const handleContactSubmit = (data: ContactForm) => {
        // Handle contact form submission
        console.log("Contact form submitted:", data);
        // You can implement your own logic here (e.g., send to API, show success message, etc.)
        alert("Thank you for your message! We will get back to you soon.");
    };

    return (
        <div className="min-h-screen bg-gray-900">
            {/* Header */}
            <Header navLinks={NAV_LINKS} />

            <main>
                {/* Hero Section */}
                <HeroSection {...HERO_DATA} />

                {/* Strengths Section */}
                <StrengthsSection
                    title={SECTION_TITLES.strengths.title}
                    subtitle={SECTION_TITLES.strengths.subtitle}
                    strengths={STRENGTHS}
                />

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
            </main>

            {/* Footer */}
            <Footer socialLinks={SOCIAL_LINKS} copyright={COPYRIGHT_TEXT} />
        </div>
    );
}
