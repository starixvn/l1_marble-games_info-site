import Button from "@/components/ui/button";
import React from "react";
import styles from "./game-demo-section.module.scss";

const GameDemoSection: React.FC<{ demoLinks: { sabaSports: string; sabaPlay: string } }> = ({ demoLinks }) => {
    return (
        <section id="showcase" className={`${styles.sectionPadding} py-16`}>
            <div className="container mx-auto px-6">
                <div className="md:col-span-3 text-center">
                    <h3 className={`${styles.headingLg} text-gradient-brand-white mb-6`}>Try Our Demo Games Now</h3>
                    <p className={`text-brand mb-6 ${styles.textBase}`}>Play for free on:</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button
                            href={demoLinks.sabaSports}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="primary"
                            size="md"
                            className={`rounded-full ${styles.demoButton}`}
                        >
                            SABA Sports Demo
                        </Button>
                        <Button
                            href={demoLinks.sabaPlay}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="primary"
                            size="md"
                            className={`rounded-full ${styles.demoButton}`}
                        >
                            SABAPLAY Demo
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GameDemoSection;
