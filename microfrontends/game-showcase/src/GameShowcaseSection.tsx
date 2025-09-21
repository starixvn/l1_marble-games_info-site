import React, { useCallback, useState } from "react";
import Card from "./Card";
import styles from "./game-showcase-section.module.scss";
import Modal from "./Modal";
import { GameShowcaseProps } from "./types";

const GameShowcaseSection: React.FC<GameShowcaseProps> = ({ title, subtitle, games, demoLinks }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);

    const withAutoplay = useCallback((url: string) => {
        const hasQuery = url.includes("?");
        const sep = hasQuery ? "&" : "?";
        // Ensure autoplay and rel params are present
        return `${url}${sep}autoplay=1&rel=0`;
    }, []);

    const openVideo = useCallback(
        (link: string) => {
            setSelectedVideoUrl(withAutoplay(link));
            setIsModalOpen(true);
        },
        [withAutoplay]
    );

    const closeVideo = useCallback(() => {
        setIsModalOpen(false);
        setSelectedVideoUrl(null);
    }, []);
    return (
        <section id="showcase" className={`${styles.sectionPadding} py-16`}>
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className={`${styles.headingLg} text-gradient-brand-white mb-6`}>{title}</h2>
                    <p className={`text-brand mt-2 ${styles.textBase}`}>{subtitle}</p>
                </div>

                <div className={styles.gridShowcase}>
                    {games.map((game, index) => (
                        <Card
                            key={`game-${index}-${game.title.toLowerCase().replace(/\s+/g, "-")}`}
                            className="overflow-hidden cursor-pointer min-h-[370px]"
                            onClick={() => openVideo(game.link)}
                        >
                            <img
                                src={game.image}
                                alt={game.alt}
                                className="w-full h-auto object-cover block"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.onerror = null;
                                    target.src = "https://placehold.co/600x800/1d232a/ffffff?text=Image+Not+Found";
                                }}
                            />
                            <div className="p-6 text-center">
                                <h3 className={`${styles.headingMd} text-white mb-2`}>{game.title}</h3>
                                <p className={`text-brand mt-2 ${styles.textSm}`}>{game.description}</p>
                            </div>
                        </Card>
                    ))}
                    <Modal isOpen={isModalOpen} onClose={closeVideo}>
                        {selectedVideoUrl && (
                            <iframe
                                src={selectedVideoUrl}
                                title="Game preview"
                                allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            />
                        )}
                    </Modal>
                </div>
            </div>
        </section>
    );
};

export default GameShowcaseSection;
