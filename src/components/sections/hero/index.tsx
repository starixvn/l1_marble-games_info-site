import { LINK_LIVE_DEMO } from "@/constants";
import { HeroSectionProps } from "@/types";
import heroImg from "@images/hero/demo_marble_game.png";
import React, { useState } from "react";
import styles from "./hero-section.module.scss";

const HeroSection: React.FC<HeroSectionProps> = ({ title, description }) => {
    const [isIframeLoaded, setIsIframeLoaded] = useState(false);
    return (
        <section id="home" className={`${styles.heroSection} text-white text-center py-16`}>
            <div className="container mx-auto px-6">
                <h1 className={`${styles.headingXl} text-gradient-brand-red mb-6 ${styles.animateFadeInUp}`}>{title}</h1>
                <p
                    className={`${styles.textBody} text-brand max-w-3xl mx-auto mb-8 ${styles.animateFadeInUp}`}
                    style={{ animationDelay: "0.2s" }}
                >
                    {description}
                </p>

                <div className={`${styles.imageWrapper} mt-10 md:mt-12 ${styles.animateFadeInUp}`} style={{ animationDelay: "0.6s" }}>
                    <img
                        src={heroImg}
                        alt="RNG Marble Games arena preview"
                        className={styles.image}
                        loading="eager"
                        style={{
                            position: "absolute",
                            inset: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: isIframeLoaded ? "none" : "block",
                        }}
                    />
                    {/* Responsive iframe with the same aspect ratio as the original image (980x492) */}
                    <iframe
                        src={LINK_LIVE_DEMO}
                        title="RNG Marble Games demo"
                        className={styles.mediaFrame}
                        loading="lazy"
                        allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                        allowFullScreen
                        onLoad={() => setIsIframeLoaded(true)}
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
